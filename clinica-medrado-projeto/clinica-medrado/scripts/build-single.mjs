/**
 * Gera um único arquivo HTML autocontido (JS e CSS embutidos) em preview/index.html.
 * Útil para enviar uma prévia por e-mail/WhatsApp ou abrir direto no navegador, sem servidor.
 * Uso: npm run build:single
 */
import { build, transform } from 'esbuild'
import { compile } from 'tailwindcss'
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const require = createRequire(import.meta.url)

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else if (/\.(jsx?|html)$/.test(entry.name)) out.push(full)
  }
  return out
}

// 1) CSS: compila o Tailwind apenas com as classes realmente usadas no código.
const files = [...(await walk(path.join(root, 'src'))), path.join(root, 'index.html')]
const candidates = new Set()
for (const file of files) {
  for (const token of (await readFile(file, 'utf8')).split(/[\s"'`]+/)) if (token) candidates.add(token)
}
const cssEntry = path.join(root, 'src/index.css')
const compiler = await compile(await readFile(cssEntry, 'utf8'), {
  base: path.dirname(cssEntry),
  loadStylesheet: async (id, base) => {
    const file = id === 'tailwindcss' ? require.resolve('tailwindcss/index.css') : path.resolve(base, id)
    return { path: file, base: path.dirname(file), content: await readFile(file, 'utf8') }
  },
})
const css = (await transform(compiler.build([...candidates]), { loader: 'css', minify: true })).code

// 2) JS: empacota o React e os componentes.
const js = (
  await build({
    entryPoints: [path.join(root, 'src/main.jsx')],
    bundle: true,
    minify: true,
    write: false,
    format: 'iife',
    target: 'es2019',
    jsx: 'automatic',
    loader: { '.css': 'empty' },
    define: { 'process.env.NODE_ENV': '"production"' },
  })
).outputFiles[0].text

// 3) Imagens: troca os caminhos /images/... por data URIs, para o arquivo funcionar sozinho.
const imgDir = path.join(root, 'public/images')
const mime = { webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', avif: 'image/avif' }
let bundled = js
for (const name of await readdir(imgDir).catch(() => [])) {
  const type = mime[name.split('.').pop().toLowerCase()]
  if (!type) continue
  const data = (await readFile(path.join(imgDir, name))).toString('base64')
  bundled = bundled.split(`/images/${name}`).join(`data:${type};base64,${data}`)
}

// 4) HTML: embute tudo no index.html.
let html = await readFile(path.join(root, 'index.html'), 'utf8')
html = html
  .replace('</head>', () => `<style>${css}</style>\n  </head>`)
  .replace(/<script type="module" src="\/src\/main\.jsx"><\/script>/, () => `<script>${bundled.replace(/<\/script/g, '<\\/script')}</script>`)

await mkdir(path.join(root, 'preview'), { recursive: true })
await writeFile(path.join(root, 'preview/index.html'), html)
console.log(`preview/index.html — ${(html.length / 1024).toFixed(0)} KB`)
