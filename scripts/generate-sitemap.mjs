import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

let envFile = ''
try {
  envFile = await readFile(resolve('.env'), 'utf8')
} catch {
  // A production environment variable may be supplied directly by the host.
}
const envSiteUrl = envFile.match(/^(?:VITE_)?SITE_URL\s*=\s*["']?([^"'\r\n#]*)/m)?.[1]
const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || envSiteUrl || '').trim().replace(/\/+$/, '')
const outputDir = resolve('dist')
const routes = ['/', '/pedagogia-waldorf', '/turmas', '/rotina', '/contato']

let robots = 'User-agent: *\nAllow: /\n'
if (siteUrl) {
  const urls = routes.map((route) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc></url>`).join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  await writeFile(resolve(outputDir, 'sitemap.xml'), sitemap, 'utf8')
  robots += `Sitemap: ${siteUrl}/sitemap.xml\n`
  console.log(`Sitemap generated for ${siteUrl}`)
} else {
  console.warn('SITE_URL is not configured; sitemap.xml was not generated. Set SITE_URL to the canonical production origin.')
}

await writeFile(resolve(outputDir, 'robots.txt'), robots, 'utf8')
