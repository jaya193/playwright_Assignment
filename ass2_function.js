//Task 1:function declaration -->naming function
function userProfile(name)
{
    console.log("Hello,"+name+"!");
}
userProfile("Jayashree");

//Task 2:arrow function
//<fn>=(para)=>expression
let double =(num) => num*2
console.log("Arrow function val : "+double(2))

//Task 3: Anonymous Function
setTimeout(function(){
    console.log("Login 2 sec")
},2000)

//Task 4: ----- Callback Function------

function callback()
{
     console.log("Callback executed")
}

function getUserData(usernm,age,callback)
{
    setTimeout(() =>{
    console.log(" UserName :"+usernm)
    console.log(" Age :"+age)
 callback();    
},3000);

}

getUserData("Shree","12",callback)



