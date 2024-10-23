/*
const user = {
    username: "sufian Mahmood",
    price: 450,

    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`);
         console.log(this);
         

    }
}

user.welcomeMessage()
user.username = "akshay"
user.welcomeMessage()
console.log(this);
*/

//function chai() {
//    let username = "sufian"
//    console.log(this.username);
//}

const chai = () => {
    let username = "sufian"
    console.log(this.username);
}
//chai()
/*
const addTwo = (num1, num2) => {
    return num1 +num2
}

console.log(addTwo(5,7));
*/

//const addTwo = (num1, num2) =>  num1 +num2
//console.log(addTwo(5,7));

//const addTwo = (num1, num2) =>  (num1 +num2)
//console.log(addTwo(5,7));

const addTwo = (num1, num2) =>  ({username: "sufian"})
console.log(addTwo(5,7));


