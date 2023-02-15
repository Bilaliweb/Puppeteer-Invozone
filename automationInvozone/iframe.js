const puppeteer = require('puppeteer');
async function run(){
    const browser = await puppeteer.launch({headless:false, args: ['--start-fullscreen']})
    const page = await browser.newPage()
    await page.goto('https://chercher.tech/practice/frames');
    // handle frame
    const frameHandle = await page.$("iframe[id='frame1']");
    const frame = await frameHandle.contentFrame();
    // filling form in iframe
    await frame.type('input', 'chercher tech');
}
run()