//Find the number of occurrences.
const nums = [2,4,5,2,1,2];
let count =0;
const k = 2;

nums.forEach(element => {
    if(element===k)
    {
     count++;
    }  
});
if(count!=0)
{
console.log("No.of Occurance of "+k+"-->"+count);
}
else{
   console.log("No search Element Found");
}


