//Assignment: 3 Create a new Account 
import { test, expect } from "@playwright/test";

test('Create Account SF',async({page}) =>{
    //1. Navigate to the url https://login.salesforce.com/ 
    await page.goto(" https://login.salesforce.com/")
    //2. Enter username using getByLabel 
await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com")
//3. Enter password using getByLabel 
await page.getByLabel('Password').fill("TestLeaf@2025")

// Verify the title and url of the page using appropriate assertions 
 const title= await page.title()
console.log("Title :"+ title )
 const geturl=  page.url()
console.log("URL :"+ geturl );
expect(title).toContain("Login | Salesforce")
expect(geturl).toBe("https://login.salesforce.com/")
// 4. Click Login
  await page.locator("#Login").click()


await page.waitForTimeout(3000)
  // 6. Click App Launcher (class locator)
  await page.locator('.slds-icon-waffle').click();

  // 7. Click View All
  //await page.getByText('View All').click()
  await page.getByRole('button', { name: 'View All Applications' }).click();
await page.waitForTimeout(3000)
  // 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
  await page.getByPlaceholder('Search apps or items...').fill('Service');

  // 9.Click Service using index based XPath
  //await page.waitForTimeout(2000);
   //await page.locator('//p[contains(text(),"Service")]').first().click()
 //await page.locator('//p[contains(text(),"Service")]').nth(1).click()
 await page.waitForTimeout(2000)
 //await page.getByRole('link', { name: 'Service' }).click();
 const service = page.locator('//a[contains(.,"Service")]').first();
 await expect(service).toBeVisible();
 await service.click();
  // 10. Click Accounts using attribute based CSS selector 
  await page.waitForTimeout(2000)
  await page.locator('a[title="Accounts"]').click();
  // 11. Click New using getByRole
  await page.getByRole('button', { name: 'New' }).click();

  // 12. Enter Account name using attribute based CSS selector 
  await page.locator('input[name="Name"]').fill('Jai');

  // 13.  Click Save button using XPath 
  await page.locator('//button[@name="SaveEdit"]').click();

  // 14. Verify the toast message displayed
  const toast = page.locator('.toastMessage');
  //await page.waitForTimeout(3000)
  await expect(toast).toContainText('created');
//await page.waitForTimeout(3000)
 })

/*1. Navigate to the url https://login.salesforce.com/ 
2. Enter username using getByLabel 
3. Enter password using getByLabel 
4. Click Login 
5. Verify the title and url of the page using appropriate assertions 
6. Click App Launcher using the class locator 
7. Click View All using getByText //await expect(toast).toBeVisible();
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
9. Click Service using index based XPath 
10. Click Accounts using attribute based CSS selector 
11. Click New using getByRole 
12. Enter Account name using attribute based CSS selector 
13. Click Save button using XPath 
14. Verify the toast message displayed*/