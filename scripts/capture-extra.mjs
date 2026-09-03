import puppeteer from 'puppeteer-core'
import fs from 'node:fs'

const candidates = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
]
const exe = candidates.find((f) => fs.existsSync(f))
const outDir = 'C:/Users/User/Projects/fraksis/src/assets/projects'

const browser = await puppeteer.launch({
  executablePath: exe,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})

const ua =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

// SaunaSpeak: open the public no-signup demo instead of the login screen
try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.setUserAgent(ua)
  await page.goto('https://saunaspeak.com/', { waitUntil: 'networkidle2', timeout: 45000 })
  await new Promise((r) => setTimeout(r, 2000))
  const clicked = await page.evaluate(() => {
    const el = [...document.querySelectorAll('a,button')].find((n) =>
      /try a sentence/i.test(n.textContent),
    )
    if (el) {
      el.click()
      return true
    }
    return false
  })
  await new Promise((r) => setTimeout(r, 4000))
  await page.screenshot({ path: outDir + '/saunaspeak.webp', type: 'webp', quality: 82 })
  console.log('saunaspeak demo shot OK (clicked:', clicked + ')')
  console.log(await page.evaluate(() => document.body.innerText.slice(0, 500)))
  await page.close()
} catch (e) {
  console.log('saunaspeak FAIL:', e.message)
}

await browser.close()
