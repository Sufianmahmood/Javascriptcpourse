/*
function sayMyName() {
    console.log("s");
    console.log("u");
    console.log("f");
    console.log("i");
    console.log("a");
    console.log("n");
}
sayMyName()

//function addTwoNumbers(number1, number2){
//         console.log(number1 + number2);      
//}

function addTwoNumbers(number1, number2){

         //   let result = number1 +number2
          //  return result     

          return number1 + number2
    }
const result = addTwoNumbers(3,4)
//console.log("Result:", result);

function loginUserMessage(username) {
    if (username == undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("sufian"));

console.log(loginUserMessage())
*/ 

function calculateCartPrice(val1,val2,val3,...num1){
  return   num1
}
console.log(calculateCartPrice(200, 400, 800, 1000 ));

const user ={
    username: "sufian",
    price: "50,00,00,00,000"
}
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }

 handleObject(user);

 handleObject({
    username: "hassan",
    price:"5,00,00,00,00,00,00,00,000"
 })

const myNewArray = [200, 400, 800, 900]
 function returnSecondValue(getArray){
    return getArray[3]
 }

 console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400,800,900]));
