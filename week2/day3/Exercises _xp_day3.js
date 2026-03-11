//excercice1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
const {name, location: {country, city, coordinates: [lat, lng]}} = person;
//excercice2
function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

//excercice3
const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1️⃣ Turn the object into an array of [key, value] pairs
const usersArray = Object.entries(users);
console.log(usersArray);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// 2️⃣ Multiply each user ID by 2
const updatedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsersArray);
// Output: [ [ 'use]()]()

//excercice4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//excercice5
class Dog {
  constructor(name) {
    this.name = name;
  }
}
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size; // ❌ Error: 'this' used before 'super()'
  }
}
// Will NOT work – this is used before calling super().
class Labrador extends Dog {
  constructor(name, size) {
    super(name);    // ✅ Calls parent constructor
    this.size = size; // ✅ Can now use 'this'
  }
}
//Correct – This properly calls the parent constructor and then sets the subclass property.
class Labrador extends Dog {
  constructor(size) {
    super(name);    // ❌ 'name' is undefined here
    this.size = size;
  }
}
//Will NOT work – name is undefined because it’s not passed to the constructor.
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name; // ❌ 'this' used before 'super()'
    this.size = size;
  }
}
//Will NOT work – Again, this used before super().
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}


