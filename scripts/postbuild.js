import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const routes = [
  {
    path: 'nettisivut-yritykselle',
    title: 'Nettisivut yritykselle helposti ja selkeästi | SnakeByte',
    description: 'Nettisivut yritykselle ilman teknistä säätöä. Selkeä prosessi, moderni toteutus, hinnat 250 € ja 600 € + alv.',
  },
  {
    path: 'kotisivut-pienyritykselle',
    title: 'Kotisivut pienyritykselle ilman teknistä säätöä | SnakeByte',
    description: 'Kotisivut pienyritykselle, toiminimelle ja yrittäjälle selkeällä prosessilla. Aloita landing pagella tai perussivustolla.',
  },
  {
    path: 'landing-page-yritykselle',
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

console.log('postbuild done')
