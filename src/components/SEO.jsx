import { useEffect } from 'react'
import { siteUrl } from '../content/siteContent'

function upsertMeta(selector, createAttrs, valueAttr, value) {
  let node = document.head.querySelector(selector)
  if (!node) {
    node = document.createElement('meta')
    Object.entries(createAttrs).forEach(([key, val]) => node.setAttribute(key, val))
    document.head.appendChild(node)
  }
  node.setAttribute(valueAttr, value)
}

function upsertCanonical(url) {
  let node = document.head.querySelector('link[rel="canonical"]')
  if (!node) {
    node = document.createElement('link')
    node.setAttribute('rel', 'canonical')
    document.head.appendChild(node)
  }
  node.setAttribute('href', url)
}

export default function SEO({ title, description, path = '/' }) {
  useEffect(() => {
    const canonical = `${siteUrl}${path}`
    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description' }, 'content', description)
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, 'content', title)
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, 'content', description)
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, 'content', canonical)
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, 'content', title)
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, 'content', description)
    upsertCanonical(canonical)
  }, [title, description, path])

  return null
}
