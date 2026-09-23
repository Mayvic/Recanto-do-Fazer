const siteOrigin = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim().replace(/\/+$/, '') || ''

export function canonicalUrl(path: string): string | undefined {
  return siteOrigin ? `${siteOrigin}${path}` : undefined
}

export function canonicalHead(path: string) {
  const url = canonicalUrl(path)
  return url ? [{ rel: 'canonical' as const, href: url }] : []
}
