//for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best no,");
        
    }
  //  console.log(element);
}

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop value is ${i}`);
    
    for (let j = 0; j <= 10; j++) {
   // console.log(`Inner loop value is ${j} and inner loop is ${i}`);

  // console.log(i + '*' + j + ` = ` + i*j);
    
        }
}
let myArray = ["suoerman",  "batman", "wonderwoman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// break and continue 

for (let index = 1; index <= 20; index++) {
    console.log(`Value of i is ${index}`);
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    
}