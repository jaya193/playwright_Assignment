//Create two JavaScript code with `if-else` for browser 
// launch messages, and  with `switch` for test type messages. 

let browserName ="Chrome"

function launchBrowser(browserName)
{
if(browserName ==="Chrome")
{
    let browserVersion ="Chrome_11.3"
    console.log("Chrome Ver-->"+browserVersion)

}
else{
    console.log("OtherBrowser Version")
}
}

launchBrowser("Chrome")
launchBrowser("FireFox")

 console.log("--------------Second runTest------------")

//let testType ="sanity"
//let testType ="UAT"
//let testType ="sMoke"

function runTest(testType)
{

switch(testType.toLowerCase())
{
    case "smoke":
        console.log("Smoke")
        break;
    case "sanity":
        console.log("Sanity")
        break;
    case "regression":
        console.log("Regression")
        break;
        default:
            console.log("Smoke Test by default") 
            break;
        

}
}
runTest("sanity")
runTest("UAT")
runTest("sMoke")

