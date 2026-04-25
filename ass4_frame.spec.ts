import { test, expect } from "@playwright/test";
/*test("Frame",async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    await page.waitForTimeout(10000)
    const allframes= page.frames() // Total Frame count        
    console.log("Total Frame count "+allframes.length)     
    //length of mainframe
    const mf= allframes[0]
    console.log(await mf.title())
    //Simple Frame
    const first_frm =allframes[1]
    const frame_ele =first_frm.locator("//button[text()='Click Me']")
    await frame_ele.click()
    console.log("Simple Frame "+ await frame_ele.innerText())
   

})*/

test.only("FrameLocator",async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.waitForTimeout(8000)
    const first_frm =  page.frameLocator("(//iframe)[1]").locator("#Click")
    await first_frm.click()
    const first_fr_Text = await first_frm.innerText()
    console.log("Simple Frame "+ first_fr_Text)
    //Assert
    await expect(first_fr_Text).toBe("Hurray! You Clicked Me.");

    //nested frame
    const outerFr= page.frameLocator("//h5[contains(text(), 'Click Me (Inside Nested frame)')]/following-sibling::iframe")
    const innerfr=outerFr.frameLocator('#frame2')
    await  innerfr.locator("#Click").click()
    const innerfr_Text = await innerfr.locator("#Click").innerText()
    console.log("Nested Frame "+ innerfr_Text)
    //Assert
    
    await expect(innerfr_Text).toBe("Hurray! You Clicked Me.");

    //count of frames
   const allframes= page.frames() // Total Frame count        
    console.log("Total Frame count--> "+allframes.length)     

    })
