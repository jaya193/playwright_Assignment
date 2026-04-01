//Create a JavaScript code that determines if a number is positive, negative, or zero and 
// returns a corresponding string indicating the type.

let num =9;
function numbertype(num)
{
switch(true)
{
    case (num >0):
    {
      console.log("Positive number")
      break;
    }
    case (num < 0):
    {
      console.log("Negative number")
      break;
    }
    case (num == 0):
    {
      console.log("Number is zero")
      break;
    }
    default:
       console.log("Not a Number") 

}
}
numbertype(1)
numbertype(-2)
numbertype(0)
numbertype(-2)
//numbertype("a")