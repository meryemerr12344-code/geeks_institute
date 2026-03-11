// ===== Exercise 1
// ===== Exercise 1

/*    const people = ["Greg", "Mary", "Devon", "James"];
   //Write code to remove “Greg” from the people array.
   console.log(people);
   //people.shift();
   //console.log(people);
   //Write code to replace “James” to “Jason”.
   people[3] = "Jason";
   console.log(people);
   //adds to the end
   people.push("meryem");
     console.log(people);
     //Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
     const indexDeMary = people.indexOf("Mary");
     console.log(indexDeMary);
   //Write code to make a copy of the people array using the slice method
     const peopleCopy = people.slice(2,3);
     console.log(peopleCopy); 
     console.log(people);
     // Code pour trouver l'index de "Foo"
     const fooIndex = people.indexOf("Foo");
     console.log(fooIndex);
// Code pour aff le dernier elts
     const last = people.at(-1);
     console.log(last);
//Using a loop, iterate through the people array and console.log each person.
     for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
     } 
     //Using a loop, iterate through the people array and exit the loop after you console.log “Devon”
     for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break; 
    }
} */

// ===== Exercise 2


// ===== Exercise 2
/* //Create an array called colors where the value is a list of your five favorite colors.
  const colors = ["red", "blue", "green", "yellow", "purple"];
//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`Mon choix #${i + 1} est ${colors[i]}`);
}
//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    const suffix = (i === 0) ? "st" : (i === 1) ? "nd" : (i === 2) ? "rd" : "th";
    console.log(`My #${i + 1}${suffix} choice is ${colors[i]}`);
} */
// ===== Exercise 3
/*  //Prompt the user for a number.Hint : Check the data type you receive from the prompt (ie. Use the typeof method
const userInput = prompt("Veuillez entrer un nombre :");
console.log("Type de données reçu :", typeof userInput);
const numberValue = parseFloat(userInput);
// Vérifier si c'est un nombre valide
if (!isNaN(numberValue)) {
    console.log(`Vous avez entré un nombre valide : ${numberValue}`);
    console.log(`Type après conversion : ${typeof numberValue}`);
} else {
    console.log("Ce n'est pas un nombre valide.");
    console.log(`Valeur originale : "${userInput}"`);
}

//While the number is smaller than 10 continue asking the user for a new number.Tip : Which while loop is more relevant for this situation?
let nombre;

do {
    const input = prompt("Veuillez entrer un nombre (doit être 10 ou plus) :");
    console.log(`Type de données reçu : ${typeof input}`);
    nombre = parseFloat(input);
    if (isNaN(nombre)) {
        console.log("⚠️ Ce n'est pas un nombre valide. Veuillez réessayer.");
    } else if (nombre < 10) {
        console.log(`❌ ${nombre} est inférieur à 10. Veuillez entrer un nombre plus grand.`);
    }
} while (nombre < 10);
console.log(`✅ Félicitations ! ${nombre} est 10 ou plus.`);
console.log("Programme terminé."); */
 // ===== Exercise 4
/* //1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
} 
//2
console.log(building.numberOfFloors);
//3
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
//4
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);     
//5
const totalRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if (totalRent > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(`Le loyer de Dan a été mis à jour à ${building.numberOfRoomsAndRent.dan[1]}`);
}         


// ===== Exercise 5
const family = {
    father: "simo",
    mother: "najat",
     son: "loubna",          
     daughter: "alia",
}
for (let key in family) {
    console.log(key);
}
for (let key in family) {
    console.log(family[key]);
} */
// ===== Exercise 6
/* const details = {
    my: 'name',
    is: 'Rudolf',
     the: 'raindeer'
}
let sentence = '';
for (let key in details) {
     sentence += key + ' ' + details[key] + ' ';
}
console.log(sentence.trim()); */
// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secretSocietyName = '';
for (let i = 0; i < names.length; i++) {
    secretSocietyName += names[i][0];
}
console.log(secretSocietyName);
