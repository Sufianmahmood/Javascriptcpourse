/*
let a = 10
const b = 20
var c = 30
if (true) {
    let a = 40
      console.log("Inner:", a);      
    const b = 50
       console.log("Inner:", b);
    var c = 60
      console.log("Inner:", c);
}


console.log(a);
console.log(b);
console.log(c);
*/

function one() {
  const username = "sufian"
     function two() {
      const website = "youtube.com"
      //console.log(username);
      
      
     }
    // console.log( );
     
  two()
  
}

one()

if (true) {
   const username= "sufian"
   if (username === "sufian") {
      const website= "youtube"
      //console.log(username + website);
     }
     //console.log(website);
     
}

//console.log(username);



// ************interesting*******************

console.log(addone(5));

function addone(num){
   return num+1
}

console.log(addone(5));

//  console.log(addtwo(6));          error
const addtwo = function(num){
    return num+1
}

console.log(addtwo(6));
