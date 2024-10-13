// Primitive

// 7 types : string, Number, Boolean,symbol, BigInt

const score= 23
const scoreValue = 100

const isLoggedIn = false
const outsidetemp = null 
let userEmail;
 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber = 324846313784321n

//Reference(Non Primitive)

//Array, objects, Functions

const heroes = ["Superman", "Batman", "Shadow Monarch"];
let myObj = {
    name: "Sufian",
    age: 18,
}

const myFunction = function(){
    console.log("hello World");

}