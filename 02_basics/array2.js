const marvel_heroes = ["captainamerica", "thor", "hulk"]
const dc_heroes = ["superman", "batman", "wonderwomen"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

//const all_heroes = marvel_heroes.concat(dc_heroes);
//console.log(all_heroes)

/*
const all_heroes2 = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes2);
*/
/*
const another_array = [0,1, 2, [3, 4], 5, 6, [7, [8, 9]]]

const another_array1 = another_array.flat(Infinity);

console.log(another_array1);
*/
 
console.log(Array.isArray("sufian"));
console.log(Array.from("sufian"));
console.log(Array.from({name: "sufian"})); //interesting



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

