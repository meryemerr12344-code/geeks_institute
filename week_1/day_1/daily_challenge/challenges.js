// ====== Daily Challenge 1
/* //1
let sentence = "This dinner is not that bad ! You cook well";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let before = sentence.slice(0, wordNot);
  let after = sentence.slice(wordBad + 3);
  let result = before + "good" + after;
  console.log(result);
} else {
  console.log(sentence);
} */
// ====== Daily Challenge 2
//Les étoiles  1er méthode
let stars = "";

for (let i = 1; i <= 6; i++) {
  stars += "* ";
  console.log(stars);
}
//Les étoiles  2ème méthode
 for (let i = 1; i <= 6; i++) {
  let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}

// ====== Daily Challenge 3
