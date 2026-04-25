function fibonacci(n:number):number
{
    let a,b:number
    a=0
    b=1
    if(n < 0)
    {
    console.log("Input Errot num greater than 0")
    return -1
    }
    //f(0)=0
    else if(n == 0)
    {
        return a
    }
    //f(1)=1
    else if(n == 1)
    {
        return b
    }
    //f(n)=f(n-1)+f(n-2)
    else {
        for(let i=2;i<=n;i++)
        { const c = a+b;
            a=b;
            b=c;
        }
           
        return b


    }
    
}

const res1 =fibonacci(3)
console.log("Output1 :"+ res1)
const res2 =fibonacci(0)
console.log("Output2 :"+ res2)
const res3 =fibonacci(1)
console.log("Output 3:"+ res3)