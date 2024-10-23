//const useremail = "sufian.ai"
//
//if (useremail) {
//    console.log(`Got email ${useremail}`);
//}else {
//    console.log("don't have emial");
//}
//falsy values 
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//surprisingly Truthy values
// "0", false, " ", [], {}, function(){}

//array check 
//if (useremail.length === 0) {
//    console.log("Array is empty");
//}
//
//const emptyObj = {}
//if (Object.keys(emptyObj).length === 0) {
//    console.log("object is empty");
//}

// nullish coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// terniary operator

//   condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

