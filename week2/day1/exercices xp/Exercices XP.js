// Exercices 1

// 1️⃣ Fonction avec variable locale
function funcOne() {
    let a = 5; // variable locale à funcOne
    if (a > 1) {
        a = 3; // on réassigne la variable locale
    }
    alert(`inside the funcOne function ${a}`); // Alerts: 3
}

funcOne(); // Résultat : 3

// 2️⃣ Variable globale
let globalA = 0;

function funcTwo() {
    globalA = 5; // modifie la variable globale
}

function funcThree() {
    alert(`inside the funcThree function ${globalA}`);
}

funcThree(); // Alerts: 0
funcTwo();   // modifie globalA à 5
funcThree(); // Alerts: 5

// 3️⃣ Créer une variable globale via window
function funcFour() {
    window.globalB = "hello"; // variable globale sur window
}

function funcFive() {
    alert(`inside the funcFive function ${globalB}`);
}

funcFour();  // définit window.globalB
funcFive();  // Alerts: hello

// 4️⃣ Masquer la variable globale avec une locale
let globalC = 1;

function funcSix() {
    let a = "test"; // variable locale qui masque globalC
    alert(`inside the funcSix function ${a}`);
}

funcSix(); // Alerts: test

// 5️⃣ Portée de bloc avec let
let globalD = 2;

if (true) {
    let a = 5; // variable locale au bloc if
    alert(`in the if block ${a}`); // Alerts: 5
}

alert(`outside of the if block ${globalD}`); // Alerts: 2


//exercices 2
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

//exercices 3
const isString = (value) => typeof value === 'string';

console.log(isString('hello'));        // true
console.log(isString([1, 2, 4, 0]));  // false

//exercices 4
const sum = (a, b) => a + b;
console.log(sum(5, 10)); // 15
console.log(sum(3, 7));  // 10
console.log(sum(-2, 8)); // 6

//exercices 5
// Function declaration
function kgToGrams(kg) {
    return kg * 1000;
}

// Invoke it
console.log(kgToGrams(5)); // 5000

// Function expression
const kgToGramsExp = function(kg) {
    return kg * 1000;
}

// Invoke it
console.log(kgToGramsExp(3)); // 3000

// Arrow function
const kgToGramsArrow = kg => kg * 1000;

// Invoke it
console.log(kgToGramsArrow(2)); // 2000

//exercices 6
(function(numChildren, partnerName, location, jobTitle) {
    // Create the sentence
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;

    // Display it in the DOM
    // First, create a paragraph element
    const p = document.createElement('p');
    p.textContent = fortune;

    // Append it to the body
    document.body.appendChild(p);

})(3, "Alice", "Paris", "Software Engineer"); // Example arguments

//exercices 7
(function(userName) {
    // Create a div to display user info
    const userDiv = document.createElement('div');
    userDiv.id = 'userDiv';

    // Create a paragraph for the user name
    const nameP = document.createElement('p');
    nameP.textContent = userName;

    // Create an image for the profile picture
    const profileImg = document.createElement('img');
    profileImg.src = 'https://via.placeholder.com/40'; // Placeholder image
    profileImg.alt = 'Profile Picture';

    // Append name and image to the div
    userDiv.appendChild(nameP);
    userDiv.appendChild(profileImg);

    // Append the div to the navbar
    document.querySelector('nav').appendChild(userDiv);

})("John"); // Pass the user's name here


//exercices 8
//part1
function makeJuice(size) {
  // Inner function
  function addIngredients(ing1, ing2, ing3) {
    // Display the sentence on the DOM
    document.write(
      `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.<br>`
    );
  }

  // Invoke inner function ONCE
  addIngredients("apple", "banana", "orange");
}

// Invoke outer function in the global scope
makeJuice("medium");

//part2
function makeJuice(size) {
  // Empty array to store ingredients
  const ingredients = [];

  // Inner function to add ingredients
  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  // Inner function to display the juice
  function displayJuice() {
    document.write(
      `The client wants a ${size} juice, containing ${ingredients.join(", ")}.<br>`
    );
  }

  // Invoke addIngredients TWICE to reach 6 ingredients
  addIngredients("apple", "banana", "orange");
  addIngredients("strawberry", "mango", "kiwi");

  // Display final juice
  displayJuice();
}

// Invoke outer function in the global scope
makeJuice("large");
