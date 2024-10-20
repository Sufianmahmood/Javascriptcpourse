// singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sufian",
    "full name": "Sufian Mahmood",
    [mySym]: "mykey1",
    age: 18,
    location: "delhi",
    email: "abcd@ja.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}
/*
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof (JsUser[mySym]))

console.log(JsUser);
JsUser.email = "sep@htmail.com"
//Object.freeze(JsUser)
JsUser.email = "fed@nmail.com"
 console.log(JsUser);
 
*/
 JsUser.greeting =  function(){
    console.log("hello Js user");
 }
 JsUser.greetingTwo =  function(){
    console.log('hello Js user. ${this.name}');
 }


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

