import { test, expect } from "@playwright/test";

test('Login Testleaf',async({page}) =>{
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
//7. Click Create Lead 
await page.locator("//a[@href='/crmsfa/control/createLeadForm']").click()

//8. Fill the Company Name id="createLeadForm_companyName"
const company =  page.locator("#createLeadForm_companyName")
await company.fill("Testleaf");
const company_name = await company.inputValue();
console.log("company_name:"+company_name)

//9. Fill the First Name--> createLeadForm_firstName
const firstName=  page.locator("#createLeadForm_firstName")
await firstName.fill("Jai")
const firstNameval = await firstName.inputValue();
console.log("firstName:"+firstNameval)
//10. Fill the Last Name -->createLeadForm_lastName
const lastName=await page.locator("#createLeadForm_lastName")
await lastName.fill("Sree")
const lastNameval = await lastName.inputValue();
console.log("lastName:"+lastNameval)
//11. Fill the Salutation -->createLeadForm_personalTitle
await page.locator("#createLeadForm_personalTitle").fill("HR")
//12. Fill the Title -->createLeadForm_generalProfTitle
await page.locator("#createLeadForm_generalProfTitle").fill("Mr")
//13. Fill the Annual Revenue -->createLeadForm_annualRevenue*/
//14. Fill the Department -->
  // await page.getByRole('textbox', { name: 'departmentName' }).fill("IT")
await page.locator("#createLeadForm_departmentName").fill("IT")
//15. Fill the Phone number --> 
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9790174321")
//16. Click Create Lead button 
await page.locator(".smallSubmit").click()
/*17. Verify the company name, first name, last name and the status using auto retrying and non
retrying assertions*/
expect(company_name).toBe("Testleaf")
expect(firstNameval).toBe("Jai")
expect(lastNameval).toBe("Sree")
//status in view lead page
const status= await page.locator("#viewLead_statusId_sp").textContent()
console.log("status:" + status);
expect(status).toContain("Assigned");


    })