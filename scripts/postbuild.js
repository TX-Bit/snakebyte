import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const routes = [
  {
    path: 'nettisivut-yritykselle',
    title: 'Nettisivut yritykselle helposti ja selkeästi | SnakeByte',
    description: 'Modernit nettisivut pienyritykselle, yrittäjälle ja toiminimelle ilman teknistä säätöä. Landing page 250 € + alv tai perussivusto 600 € + alv.',
  },
  {
    path: 'landing-page',
    title: 'Landing page yritykselle nopeasti ja edullisesti | SnakeByte',
    description: 'Landing page yritykselle 250 € + alv. Yksi selkeä sivu uudelle yritykselle, palvelulle tai kampanjalle.',
  },
  {
    path: 'nettisivujen-uudistus',
    title: 'Nettisivujen uudistus selkeästi ja helposti | SnakeByte',
    description: 'Nettisivujen uudistus tekee vanhasta sivustosta modernin, mobiiliystävällisen ja helpommin yhteydenottoja tuovan.',
  },
  {
    path: 'hinnasto',
    title: 'Hinnasto - nettisivut yritykselle | SnakeByte',
    description: 'SnakeByte-hinnasto: landing page 250 € + alv ja perussivusto 600 € + alv. Selkeä hinta ennen aloitusta.',
  },
  {
    path: 'opas/nettisivut-yritykselle-hinta',
    title: 'Nettisivut yritykselle hinta – mitä kotisivut maksavat?',
    description: 'Selkeä opas yrityksen nettisivujen hintaan. Katso mitä landing page ja perussivusto yleensä sisältävät ja miten pienyritys voi aloittaa helposti.',
  },
]

const distDir = 'dist'
const base = readFileSync(join(distDir, 'index.html'), 'utf-8')

for (const route of routes) {
  const url = `https://snakebyte.fi/${route.path}`
  const { title, description } = route

  const html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/,  `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/,        `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/,       `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/,  `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/,          `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/,       `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/,  `$1${description}$2`)

  const dir = join(distDir, route.path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html, 'utf-8')
  console.log(`pre-rendered: ${route.path}`)
}

// Redirect-sivut vanhoille URL-osoitteille
const redirects = [
  { path: 'kotisivut-pienyritykselle', target: 'https://snakebyte.fi/nettisivut-yritykselle' },
  { path: 'landing-page-yritykselle',  target: 'https://snakebyte.fi/landing-page' },
]

for (const r of redirects) {
  const html = `<!doctype html><html lang="fi"><head><meta charset="utf-8"><link rel="canonical" href="${r.target}"><meta http-equiv="refresh" content="0;url=${r.target}"><title>Siirretty</title></head><body></body></html>`
  const dir = join(distDir, r.path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html, 'utf-8')
  console.log(`redirect: ${r.path} → ${r.target}`)
}

console.log('postbuild done')
