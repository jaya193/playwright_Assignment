function intersection(arr1,arr2)
{
    let res=[];
    for(let i=0;i< arr1.length;i++)
{
    for(j=0;j< arr2.length;j++)
    {
        if(arr1[i]===arr2[j])
        {
            console.log("Common val in arr1 "+arr1[i])
            res.push(arr1[i])
        }
        
    
    }
}
return res
}
let num1 =[1,2,2,4]
//let num1 =[0,5,3,9]
let num2 =[2,4,6,8]
let final_res = intersection(num1,num2)
// No Match Data
//let final_res = intersection([2,4,6,8],[1,5,3,9])
let s = [];
//Remove if any repeated element found
if(final_res.length!=0)
{
    console.log("initial Fetch data -->"+final_res)
    for (let i = 0; i < final_res.length; i++) {
  if (!s.includes(final_res[i])) {
    s.push(final_res[i]);
  }
}
console.log("Final Matching Value "+s)

}
else
{
 console.log("No Matching Value found")   
}


//Otherway
/*function intersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    // check if element exists in arr2
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {

        // check if already NOT in result (avoid duplicates)
        let exists = false;

        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) {
            exists = true;
            break;
          }
        }

        if (!exists) {
          result.push(arr1[i]);
        }
      }
    }
  }

  return result;
}*/
