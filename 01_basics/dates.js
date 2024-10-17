//Dates
/*
let myDate = new Date( )
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(typeof myDate);

*/
let myCreatedDate = new Date(2002, 8, 15);
/*
//console.log(myCreatedDate.toDateString());
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/10000000));
*/

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: "narrow",
    timeZone:"Asia/Kolkata"
})
console.log(newDate);
