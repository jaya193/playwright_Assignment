/*Write a function to sum all the values between 1 and n, and return the sum
Take n = 5, print between 1 and 5, and keep adding the sum of values
i.e., 1+2=3, 3+3 =6, 6+4=10, 10+5 =15*/

function sumofall(n)
{
    let sum = 0;
    for(let i=1;i<=n;i++)
    {
        sum =sum+i;
        console.log("i ="+i+" sum ="+sum); 
        
    }
    return sum

}
let res = sumofall(5)
console.log("Total-->"+res); 





