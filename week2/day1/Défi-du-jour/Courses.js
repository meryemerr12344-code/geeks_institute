let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(function(fruit) {
        console.log(fruit);
    });
};

displayGroceries();

const cloneGroceries = () => {

    // Copy primitive value
    let user = client;

    // Change client value
    client = "Betty";

    console.log("client:", client);
    console.log("user:", user);

    // Copy object reference
    let shopping = groceries;

    // Modify totalPrice
    shopping.totalPrice = "35$";

    // Modify nested object
    shopping.other.paid = false;

    console.log("groceries:", groceries);
    console.log("shopping:", shopping);
};

cloneGroceries();

let user = client;
client = "Betty";
let shopping = groceries;
shopping.totalPrice = "35$";
shopping.other.paid = false;

console.log("client:", client); 
console.log("user:", user);
console.log("groceries:", groceries); 
console.log("shopping:", shopping);
    