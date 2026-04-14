// ===== Exercise 1
// Create a function that displays all the numbers divisible by 23 from 0 to 500.
// At the end, it should display the sum of all the numbers that are divisible by 23.     
/*    function displayNumbersDivisible() {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum = sum + i;
    }
  }

  console.log("Sum :", sum);
}

displayNumbersDivisible();
//5 
function displayNumbersDivisible(divisor) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum = sum + i;
    }
  }
  console.log("Sum :", sum);
}*/

// ===== Exercise 2
/* const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};
const shoppingList = ["banana", "orange", "apple"];
function myBill() {
  let total = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    if (item in stock && stock[item] > 0) {
      total = total + prices[item];
      stock[item] = stock[item] - 1;
    }
  }

  return total;
}
console.log("Total Bill: ", myBill());
 */
// ===== Exercise 3
/*
function changeEnough(itemPrice, amountOfChange) {
  let total = 0;

  total += amountOfChange[0] * 0.25; // quarters
  total += amountOfChange[1] * 0.10; // dimes
  total += amountOfChange[2] * 0.05; // nickels
  total += amountOfChange[3] * 0.01; // pennies

  if (total >= itemPrice) {
    return true;
  } else {
    return false;
  }
}
console.log(changeEnough(4.25, [25, 20, 5, 0])); */

// ===== Exercise 4
//1
/*
function hotelCost() {
  let nights;

  do {
    nights = prompt("Enter number of nights you want to stay:");
  } while (nights === null || nights === "" || isNaN(nights));

  return Number(nights) * 140;
}
console.log(hotelCost());
//2
function planeRideCost() {
  let destination;

  do {
    destination = prompt("Where are you going?");
  } while (!destination || !isNaN(destination));

  if (destination === "London") {
    return 183;
  } else if (destination === "Paris") {
    return 220;
  } else {
    return 300;
  }
}
console.log(planeRideCost());
//3
function rentalCarCost() {
  let days;
    do {
      days = prompt("How many days do you want to rent the car?");
    } while (days === null || days === "" || isNaN(days));

  let cost = days * 40;

  if (days > 10) {
    cost = cost - 50;
  }

  return cost;
}
console.log(rentalCarCost());
//4
function totalVacationCost() {
  let hotel = hotelCost();
  let plane = planeRideCost();
  let car = rentalCarCost();
    let total = hotel + plane + car;
    return `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. Total cost: $${total}`;
}
console.log(totalVacationCost());
*/

// ===== Exercise 6
/*// 1. Retrieve the div and console.log it


// 2. Change “Pete” to “Richard”
const allLi = document.querySelectorAll("li");
allLi.forEach(li => {
  if (li.textContent === "Pete") {
    li.textContent = "Richard";
  }
});

// 3. Delete the second <li> of the second <ul>
const allUl = document.querySelectorAll("ul");

if (allUl.length > 1) { 
  const secondUl = allUl[1];
  const secondLi = secondUl.querySelectorAll("li")[1];

  if (secondLi) { 
    secondLi.remove();
  }
}

// 4. Change the first <li> of each <ul> to your name
allUl.forEach(ul => {
  ul.children[0].textContent = "Meryem";
});

// 5. Add class student_list to both <ul>
allUl.forEach(ul => {
  ul.classList.add("student_list");
});

// 6. Add classes university and attendance to the first <ul>
allUl[0].classList.add("university", "attendance");

// 7. Style the div

const container = document.getElementById("container");
console.log(container);
if (container) {
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";}

// 8. Do not display the <li> that contains “Dan”
allLi.forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

// 9. Add a border to the <li> that contains “Richard”
allLi.forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
});

// 10. Change the font size of the whole body
document.body.style.fontSize = "18px";

// Bonus
if (container.style.backgroundColor === "lightblue") {
  alert("Hello John and Pete");
}*/
// ===== Exercise 6
/*
//2 Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const div = document.getElementById("navBar");  
div.setAttribute("id", "socialNetworkNavigation");
//3/1 First, create a new <li> tag (use the createElement method)
const newLi = document.createElement("li");
//3/2 Create a new text node with “Logout” as its specified text.
const newLiText = document.createTextNode("Logout");
//3/3 Append the text node to the newly created list node (<li>)
newLi.appendChild(newLiText);
//3/4 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const ul = div.querySelector("ul");
ul.appendChild(newLi);
// 4
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);

*/
// ===== Exercise 7
//1
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    alreadyRead: false
  }
];
//2 
const section = document.querySelector(".listBooks");
//3
allBooks.forEach(book => {
  
  const bookDiv = document.createElement("div");

  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;


  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }

  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImg);

  section.appendChild(bookDiv);
});

