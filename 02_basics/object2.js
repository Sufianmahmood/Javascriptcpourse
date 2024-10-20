//const tinderuser = new Object()  for single 
/*
const tinderuser = {}

tinderuser.id = "121def"
tinderuser.name = "sam"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularuser = {
    email: "abc@hmail.com",
    fullname: {
        userfullname:{
            firstname: "Sufian",
            lastame: "Mahmood"
        }
    }   
}

//console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4:"d"} 

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id: 1,
        email:"abnvg@hhfb.com"
    },
    {
        id: 2,
        email:"bsdfg@hhfb.com"
    },
    {
        id: 3,
        email:"asftf@hhfb.com"
    }
]

user[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('islopggedIn'));

*/
const course = {
      Name : "js in hindi",
      price : "999",
      courseInstructor: "hitesh"
 }

console.log(course.courseInstructor);
const {courseInstructor : Instructor } = course
console.log(Instructor);

const navbar = () => {
    
}