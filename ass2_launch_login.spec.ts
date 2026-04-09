import test, { chromium, firefox } from "@playwright/test";

test('Launch Red Bus Browser',async() =>
{
    const browser = await chromium.launch({ headless: false, channel:"msedge" });
    
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.redbus.in");
   
    console.log("Title :"+ await page.title())
     console.log("URL :"+  page.url() )
})

test('Launch flipkart Browser',async() =>
{
    const browser = await firefox.launch({ headless: false, channel:"firefox" });
    
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.flipkart.com ");
   
    console.log("Title :"+ await page.title())
     console.log("URL :"+  page.url() )
})