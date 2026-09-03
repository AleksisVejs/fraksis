import puppeteer from 'puppeteer-core'
import fs from 'node:fs'
import path from 'node:path'

const candidates = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
]
const exe = candidates.find((f) => fs.existsSync(f))
if (!exe) {
  console.error('No system Chrome/Edge found')
  process.exit(1)
}
console.log('Using browser:', exe)

const outDir = 'C:/Users/User/Projects/fraksis/src/assets/projects'
fs.mkdirSync(outDir, { recursive: true })

const sites = [
  { slug: 'saunaspeak', url: 'https://saunaspeak.com/' },
  { slug: 'blossfechten', url: 'https://blossfechtenriga.com/' },
  { slug: 'riginspect', url: 'https://riginspect.net' },
  { slug: 'ilzebrenn', url: 'https://ilzebrenn.com' },
]

const browser = await puppeteer.launch({
  executablePath: exe,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})

for (const s of sites) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 })
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  )
  try {
    await page.goto(s.url, { waitUntil: 'networkidle2', timeout: 45000 })
    await new Promise((r) => setTimeout(r, 3000))
    await page.screenshot({ path: path.join(outDir, s.slug + '.webp'), type: 'webp', quality: 82 })
    const title = await page.title()
    const text = await page.evaluate(() => document.body.innerText.slice(0, 1800))
    console.log('\n=== ' + s.slug + ' OK — ' + title)
    console.log(text.replace(/\n{3,}/g, '\n\n').slice(0, 900))
  } catch (e) {
    console.log('\n=== ' + s.slug + ' FAIL: ' + e.message)
  }
  await page.close()
}

await browser.close()
console.log('\nDone.')
