function factorial(n:number):number{
    if(n < 0) throw new Error("Input must be a non-negative integer");
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}

console.log("factorial(1):",factorial(1))
console.log("factorial(5):",factorial(5))
console.log("factorial(0):",factorial(0))
 