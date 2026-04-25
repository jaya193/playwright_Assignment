//Assignment: 2 Edit a Lead 

import {test, expect } from "@playwright/test";

test('MergeLead',async({page}) =>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("id=username").fill("Demosalesmanager")
    await page.locator("id=password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
     //pause the execution
    //await page.waitForTimeout(3000)
   
  // # 5. Click CRM/SFA 
  await page.locator("text=CRM/SFA").click()
  //6. Click Leads 
await page.locator("//a[@href='/crmsfa/control/leadsMain']").click()
//Click Merge Leads 

await page.locator("text=Merge Leads").click()

//Click From Lead widget -Handle the new tab
//page.click('//img[@alt="Lookup"]')
const fromlead = page.locator("(//img[@alt='Lookup'])[1]")
const pageRef=page.waitForEvent('popup')
await fromlead.click()

const newTab=await pageRef //resolving promise
console.log(await newTab.title())

await newTab.waitForLoadState();

const firstLead = await newTab.locator('//a[@class="linktext"]').first().click()
//Click To Lead widget  
const tolead = page.locator("(//img[@alt='Lookup'])[2]")
const pageRef1=page.waitForEvent('popup')
await tolead.click()

const newTab1=await pageRef1 //resolving promise
//console.log("to Lead Title: " + await newTab1.title())  
//await newTab1.waitForLoadState();
const secondLead = await newTab1.locator('//a[@class="linktext"]').nth(5)
await secondLead.click()

//Click Merge button
await page.locator("//a[@class='buttonDangerous']").click()

//alert
page.on('dialog', async (alertType) => {
    const dialogType= alertType.type()
       const message=alertType.message()
       console.log(`The alert type is ${dialogType} and the message is ${message}`)
    await alertType.accept();
  });
await page.locator("//a[text()='Merge']").click();
await expect(page).toHaveTitle("View Lead | opentaps CRM");

})