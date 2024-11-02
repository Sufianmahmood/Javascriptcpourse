////let myName ="sufian     "
////
////console.log(myName.length);
////console.log(myName.truelength);
//
//let myHeroes = ["SuperMan", "Batman"]
//
//let heroPower = {
//    SuperMan: "comic GOD",
//    Batman: "IQ",
//
//    getSuperPower: function(){
//        console.log(`Clar Kent powers are : $//{this.SuperMan}`);
//         
//    }
//}
//
//Object.prototype.sufian = function(){
//    console.log(`sufian is present in all //aobjects`);
//    
//}
//Array.prototype.hisufian = function(){
//    console.log(`sufian says hello`);
//    
//}
//
//heroPower.sufian()
//myHeroes.hisufian()
////heroPower.hisufian()
//
////Inheritance
//const user = {
//    name: "sufian",
//    email: "hal,cdlkh@hbdjg"
//}
//
//const Teacher = {
//    makeVideo: true
//}
//
//const TeachingSupport = {
//    isAvailable:false
//}
//const TASupport = {
//    makeAssignment: 'maths assignment',
//    Fulltime: true,
//   __proto__:TeachingSupport
//}
//
//Teacher.__proto__ = user
//
//Object.setPrototypeOf(TeachingSupport)


let anotherUsername = "sufian    "

String.prototype.truelength = function (){
    console.log(`${this}`);
     console.log(`${this.name}`);
     console.log(`true lenghth is : ${this.trim().length}`);
     
         
    
}

anotherUsername.truelength()
