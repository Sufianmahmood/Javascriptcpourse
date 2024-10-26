const array =[1, 2, 3, 4, 5]
 
//const sumwirwithinitialValue = array.reduce(function (accumulator, currentValue) {
 //       console.log(`acc${accumulator} and curval${currentValue} `);
  //       return accumulator + currentValue

    //}, 0)

    const Total = array.reduce((acc, curr) => acc+curr, 0)

console.log(Total);