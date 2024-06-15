// var let vs const 

// scope 

// global scope 

// function{
//    function scope 
// }

// {
//    block scope
// }

// var is functional scope but let and const are block scope

// example

// 1
var a = 5;
console.log(a);

// 2
{
  var a = 5;        
}
console.log(a); //still a is accessable 

{
  let a = 5;        
}
console.log(a); //here a is out of scope.

// same for const 
{
  const a = 5;        
}
console.log(a) //here as well a is out of scope.


// what is variable shadowing ?

function test (){
  var a = "Hello";
  let b = "bye";
  if(true){
    let a = "Hi";  //in this line you can see 'a' variable shadowing 
//     var b = "gd nyt";   //this show u error that variable is already declared  
    console.log(a);   
    console.log(b); //this is called illigal shadowing   

  }
  console.log(a);

}

// test();

// Declaration

// var a;
// var a;//this is absolutly correct we can redeclare var variable

// let a ;
// let a ;//we can't redeclare variable using let

// const a;
// const a; //you cannot declare a variable without inizialising variable value 
// error: missing initializer in const declaration

// Declaration without initialision    


// Var and let can be declared without intialization
// Var and let can be updated but const cant be
// -there are 2 phases involved creation and execution . I creation window object is created then heap memory is allocated and then we initialise functions and variables with undefined (the whole function is stored inside the window object) . In execution the code is executed line by line and assigns variables .
// -Hoisting : during creation phase js engine moves function declarations and variable to top of the code 
// -var variables are obv hoisted let variables are not (in normal sense they are hoisted in temporal dead zone)
// -temporal dead zone : a state in which let and const variables specifically are in scope but have not been declared yet .


// javascript execution context works








