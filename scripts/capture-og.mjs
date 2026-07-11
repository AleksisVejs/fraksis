import puppeteer from 'puppeteer-core'
import fs from 'node:fs'

const candidates = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
]
const exe = candidates.find((f) => fs.existsSync(f))
const ogHtml =
  process.argv[2] ?? new URL('./og-card.html', import.meta.url).pathname.replace(/^\//, '')

const browser = await puppeteer.launch({
  executablePath: exe,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})

// og:image 1200x630
const og = await browser.newPage()
await og.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
await og.goto('file:///' + ogHtml.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise((r) => setTimeout(r, 1200))
await og.screenshot({ path: 'C:/Users/User/Projects/fraksis/public/og.png', type: 'png' })
console.log('og.png written')
await og.close()

// SaunaSpeak: tighter clip around the demo card, retina scale
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
await page.setUserAgent(
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
)
await page.goto('https://saunaspeak.fraksis.com/', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise((r) => setTimeout(r, 2000))
await page.evaluate(() => {
  const el = [...document.querySelectorAll('a,button')].find((n) =>
    /try a sentence/i.test(n.textContent),
  )
  if (el) el.click()
})
await new Promise((r) => setTimeout(r, 4000))
await page.screenshot({
  path: 'C:/Users/User/Projects/fraksis/src/assets/projects/saunaspeak.webp',
  type: 'webp',
  quality: 85,
  clip: { x: 320, y: 16, width: 640, height: 400 },
})
console.log('saunaspeak re-clipped')
await browser.close()
