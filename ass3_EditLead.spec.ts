//Assignment: 2 Edit a Lead 

import { test, expect } from "@playwright/test";

test('EditLead',async({page}) =>{
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
//7. Click Find Leads 
await page.locator("//a[@href='/crmsfa/control/findLeads']").click()
//8. Enter the first name 
await page.locator("//input[@id='ext-gen248']").fill("Jai")
//await firstName.fill("Jai");
//console.log("Find page Firstname:"+firstName)
//9. Click Find Leads button 
await page.locator("//button[text()='Find Leads']").click()
//10. Click the first resulting Lead ID
await page.locator("//a[contains(@href,'viewLead')]").first().click();

//11. Click Edit subMenuButton
await page.locator("//a[contains(@href,'updateLeadForm')]").click();
//12. Edit Company name 
const comp_Name =page.locator("#updateLeadForm_companyName")
await comp_Name.fill("TestleafChennai");
const update_company = await comp_Name.inputValue();
console.log("update_company:"+update_company)

//13. Edit Annual Revenue -->updateLeadForm_annualRevenue
const annual =page.locator("#updateLeadForm_annualRevenue")
await annual.fill("50000");
const update_annual = await annual.inputValue();
console.log("update_annual:"+update_annual)

//14. Edit Department -->updateLeadForm_departmentName
const dept =page.locator("#updateLeadForm_departmentName")
await dept.fill("Technology");
const update_dept = await dept.inputValue()
console.log("update_dept:"+update_dept)

//15. Enter Description -->updateLeadForm_description
const description =page.locator("#updateLeadForm_description")
await description.fill("InformationTechnology");
const update_descrip = await description.inputValue()
console.log("update_descrip:"+update_descrip)

//16. Click Update -->smallSubmit]
await page.locator("//input[@value='Update']").click();
//17. Verify the edited fields using appropriate assertions
 //pause the execution
 expect(update_company).toBe("TestleafChennai")
expect(update_annual).toBe("50000")
expect(update_dept).toBe("Technology")

//18. Successfully  update button click-->move to view Lead Page

const ViewLabel =await page.locator("//div[text()='View Lead']").isEnabled()
console.log("ViewLabel:"+ViewLabel)
expect(ViewLabel).toBe(true)

//pause
await page.waitForTimeout(3000)

   })