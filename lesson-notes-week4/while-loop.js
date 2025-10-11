let count = 0;

while(count <= 5) {
    // console.log(count++) // It returns the old value
    console.log("Count:", count)
    ++count
}

console.log("finished counting!")


console.log("==============remove first item in array===================");

const fruits = ["apple", "banana", "cherry", "date"];

// while(fruits.length > 0) {
//     const fruit = fruits.pop();

//     console.log(fruit);
// }

// console.log(fruits.length)


// Convert to for loop

for(let i = 0; i < fruits.length; i++) {
    const fruit = fruits.shift();

    console.log(fruit);
}

// do...while loop

// let password;

// do {
//   password = console.log("Enter password:");
// } while (password !== "secret123");

// console.log("Access granted!");

console.log("==============do...while loop===================");

const vegetables = ["carrot", "broccoli", "spinach", "potato"];

do {
    const fruit = vegetables.shift();
    
    console.log(fruit);
}while (vegetables.length > 0);

// console.log(fruits)
