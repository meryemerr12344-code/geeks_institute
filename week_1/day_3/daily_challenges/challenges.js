// ====== Daily Challenge 1
const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle");

// inputs
const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");

let values = {};

// stories array
const stories = [
  (v) => `One day ${v.person} found a very ${v.adjective} ${v.noun} and decided to ${v.verb} in ${v.place}.`,
  (v) => `In ${v.place}, a ${v.adjective} ${v.noun} helped ${v.person} to ${v.verb} happily.`,
  (v) => `${v.person} was ${v.verb} when a ${v.adjective} ${v.noun} appeared in ${v.place}!`,
  (v) => `Everyone in ${v.place} saw ${v.person} ${v.verb} with a ${v.adjective} ${v.noun}.`
];

// submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // باش الصفحة ما تعاودش تتحمل

  // get values
  values = {
    noun: noun.value.trim(),
    adjective: adjective.value.trim(),
    person: person.value.trim(),
    verb: verb.value.trim(),
    place: place.value.trim()
  };

  // check empty
  for (let key in values) {
    if (values[key] === "") {
      alert("Please fill in all fields!");
      return;
    }
  }

  generateStory();
});

// generate random story
function generateStory() {
  const randomIndex = Math.floor(Math.random() * stories.length);
  storySpan.textContent = stories[randomIndex](values);
}

// shuffle button
shuffleBtn.addEventListener("click", function () {
  if (Object.keys(values).length === 0) {
    alert("Please generate a story first!");
    return;
  }
  generateStory();
});
allBoldItems = document.getElementsByTagName("strong");

function highlight() {      
    for (let item of allBoldItems) {
        item.style.color = "blue";
    }
}

function returnNormal() {
    for (let item of allBoldItems) {
        item.style.color = "black";
    }
}

let paragraph = document.getElementsByTagName("p")[0];
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnNormal);

// ====== Daily Challenge 2

// ====== Daily Challenge 3
