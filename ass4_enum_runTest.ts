import {chromium,BrowserContext,Browser,Page} from '@playwright/test'


enum Enivronment{
localurl="http://www.google.com/qa",
devurl="htttp://www.google.com/dev",
stageurl="htttp://www.google.com/staging",
produrl="htttp://www.google.com/prod",
}



async function runTests(url:Enivronment){
const browser:Browser= await chromium.launch({channel:'chrome'})
const browserContext:BrowserContext=await browser.newContext()
const page:Page=await browserContext.newPage()
await page.goto(url)
}

runTests(Enivronment.devurl);
runTests(Enivronment.localurl);
runTests(Enivronment.stageurl);
runTests(Enivronment.produrl);

//Note:
//Getting below Error -->tsc ass4_enum_runTest.ts 
//error TS5112: tsconfig.json is present but will not be loaded if files are specified on commandline. Use '--ignoreConfig' to skip this error