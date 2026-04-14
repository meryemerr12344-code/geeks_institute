function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // If lengths are different → not anagram
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort letters and compare
  const sorted1 = cleanStr1.split("").sort().join("");
  const sorted2 = cleanStr2.split("").sort().join("");

  return sorted1 === sorted2;
}

// ✅ Examples
console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("Hello", "World")); // false