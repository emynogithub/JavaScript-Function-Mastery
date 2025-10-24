// Two main ways to write traditional function

// Function Declaration
// It is hoisted, meaning you can call it before it’s defined in your code.
function getSum() {

}

// Function Expression
// It is not hoisted

const getSumNum = function() {

}

// NB: Function Expression and Function Declaration are 
// called Regular function because they have the function keyword

/*NB: Both the arrow function and traditional function for 
expression are called function expression*/

// Difference blw arrow function and traditional function

/* Traditional functions have their own this — it changes depending on how 
the function is called.  while  
Arrow functions do not have their own this.
*/

const identity = {
   name: "Divine Ajaegbu",
   age: 21,
   sex: "Single",
   getFullIdentity: function() {
     const form = `My name is ${this.name}. I am ${this.age} years old. I am ${this.sex}`;

     return form;
   },

   getAge: () => {
     return this.age;
   }
}

console.log("regular function:", identity.getFullIdentity())
console.log("arrow function:", identity.getAge())


/*  Using arguments

Traditional functions can use the special variable arguments, which holds all passed values.

Arrow functions don’t have arguments.
*/


// Traditional or regular function

const listNum = function() {
    console.log(arguments)
}

listNum("traditional function:", 1, 2, 3, 4, 5, 7, 90, 7, 0)

// Arrow function
const listNewNum = () => {
    console.log("arrow-function:", arguments) // throw an error
}

listNewNum(3, 6, 7) 