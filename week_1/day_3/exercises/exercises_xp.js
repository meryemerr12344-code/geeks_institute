// ===== Exercise 1
/* // 1. Retrieve h1 using DOM property
let h1 = document.querySelector("h1");
console.log(h1);

// 2. Remove last paragraph
let article = document.querySelector("article");
let paragraphs = article.querySelectorAll("p");
article.removeChild(paragraphs[paragraphs.length - 1]);

// 3. Change h2 background to red on click
let h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

// 4. Hide h3 on click
let h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});

// 5. Button → make all paragraphs bold
document.getElementById("boldBtn").addEventListener("click", function () {
  paragraphs.forEach(p => p.style.fontWeight = "bold");
});

// BONUS 1: random font size on hover
h1.addEventListener("mouseover", function () {
  let randomSize = Math.floor(Math.random() * 101);
  h1.style.fontSize = randomSize + "px";
});

// BONUS 2: fade out second paragraph
let secondP = document.getElementById("second-p");
secondP.addEventListener("mouseover", function () {
  secondP.classList.add("fade");
}); */

// ===== Exercise 2
/* let form = document.querySelector("form");
console.log(form);

// inputs by id
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
console.log(fname, lname);

// inputs by name
console.log(document.getElementsByName("firstname"));
console.log(document.getElementsByName("lastname"));

form.addEventListener("submit", function (event) {
  event.preventDefault(); // باش الصفحة ما تعاودش تتحمل

  let firstNameValue = fname.value.trim();
  let lastNameValue = lname.value.trim();

  if (firstNameValue === "" || lastNameValue === "") {
    alert("Please fill in all fields");
    return;
  }

  let ul = document.querySelector(".usersAnswer");
  ul.innerHTML = "";

  let li1 = document.createElement("li");
  li1.textContent = firstNameValue;

  let li2 = document.createElement("li");
  li2.textContent = lastNameValue;

  ul.appendChild(li1);
  ul.appendChild(li2);
});
 */
// ===== Exercise 3
/*
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
  allBoldItems.forEach(item => item.style.color = "blue");
}

function returnItemsToDefault() {
  allBoldItems.forEach(item => item.style.color = "black");
}

getBoldItems();

let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

// ===== Exercise 4
document.getElementById("MyForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let radius = document.getElementById("radius").value;
  let volume = document.getElementById("volume");

  let result = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume.value = result.toFixed(2);
});
*/
// ===== Exercise ...