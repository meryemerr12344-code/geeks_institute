//excercice 1
/* const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display the colors with their number
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

const hasViolet = colors.some(color => color === "Violet"); 

console.log(hasViolet ? "Yeah" : "No..."); */

 //excercice 2
/*  const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {

  let position = index + 1;

  // Determine the correct suffix using ternary operator
  let suffix = position === 1 ? ordinal[1] :
               position === 2 ? ordinal[2] :
               position === 3 ? ordinal[3] :
               ordinal[0];

  console.log(`${position}${suffix} choice is ${color}.`);

});


//excercice 3

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
const country = "USA";
console.log([...country]);
let newArray = [...[,,]];
console.log(newArray);

//excercice 4
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log(welcomeStudents);

const residentLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);

console.log(residentLastNames); */
//exercice 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence1 = epic.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
});

console.log(sentence1);
const sentence2 = epic.reduce((acc, word) => acc + " " + word);

console.log(sentence2);

const sentence = epic.reduce((acc, word) => acc === "" ? word : acc + " " + word, "");
console.log(sentence);
console.log(epic.join(" "));
