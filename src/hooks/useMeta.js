import { useEffect } from 'react'

const DEFAULT_TITLE = 'Nettisivut pienyrityksille – modernit kotisivut koko Suomeen | SnakeByte'
const DEFAULT_DESC = 'SnakeByte tekee nettisivuja ja kotisivuja yrityksille kaikkialle Suomeen. Selkeä prosessi, modernit sivut ja kiinteä hinta. Sopii pienyrittäjille, toiminimille ja pienyrityksille.'
const DEFAULT_CANONICAL = 'https://www.snakebyte.fi/'

function setMeta(title, description, canonical) {
  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
}

export function useMeta({ title, description, canonical }) {
  useEffect(() => {
    setMeta(title, description, canonical)
    return () => setMeta(DEFAULT_TITLE, DEFAULT_DESC, DEFAULT_CANONICAL)
  }, [title, description, canonical])
}
