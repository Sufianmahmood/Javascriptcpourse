/*
const user = {
username: "hitesh",
loginCount : 8,
signedIn: true,

getUserDetails: function(){
    //console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    
}  
}
*/
//console.log(user);
//console.log(user.getUserDetails());
//console.log(this);

function User(username,  loginCount, isLoggedIn){
    this.username = username,
    this.isLoggedIn =isLoggedIn,
    this.loginCount = loginCount,
    this.greeting = function(){
        console.log(`Good evening ${username}`);
        
    }
    return this
}

const userOne = new User("sudian", 24, true)
const userTwo = new User("siperam", 178, false)
console.log(userOne.constuctor);
console.log(userTwo);
