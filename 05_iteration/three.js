// forof
 
myArray = [1, 2, 3, 4, 5]

for (const num of myArray) {
   // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
 //   console.log(`Each char is ${greet}`);
    
}

const map = new Map()
map.set('IND', "India")
map.set('USA', "America")
map.set('FR', "france")
map.set('PAK', "Pakistan")

console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
    
}

// THERE IS AN0THER WAY TO DO THIS LOOP IN OBJECT
