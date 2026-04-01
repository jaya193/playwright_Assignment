/*Create a JavaScript code that have a string, reverses it,
 and checks if the reversed string is a palindrome, print the results*/

 //let str= "anitha";
 let str ="madam";
 let ch =str.split("");
 console.log("Split-->"+ch)
 let lenOfstr =ch.length
 let rev="";
 for(let i=lenOfstr-1;i>=0;i--)
 {
    rev=rev+ch[i];
 }
  console.log("rev str-->"+rev)
  if(str === rev)
  {
    console.log("it is a palindrome --> True")
  }
  else{
    console.log("it is not a palindrome --> false")
  }