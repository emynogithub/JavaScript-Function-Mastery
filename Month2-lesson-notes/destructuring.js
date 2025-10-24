/*
Destructuring: Unpacking Data with Grace Destructuring is a powerful way to
extract data from arrays and objects into distinct variables.
*/

// Object destructuring
const form = {
  name: "Divine Ajagbu",
  age: 26,
  marital_status: "single"
}

const {name, age, marital_status} = form;

console.log(`my name is ${name}. I am ${age} years old. I am currently ${marital_status}`)

// Rename variable

const {name: first_last_name, marital_status: status} = form

console.log(`Rename: ${first_last_name}`)

// Default values

const {state = "Anambra State"} = form

console.log(`Default: ${state}`);
console.log(form)

// Array Destructuring

// This unpacks values based on their position in the array.

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [x, y, z] = numbers;

console.log(`${x}, ${y}, ${z}`);

// You can skip elements with a comma

const [, , , p, w, f, ...others] = numbers

console.log(`${p}, ${w}, ${f} `)
console.log(others);

// Spread & Rest: The Power of Three Dots The ... syntax does two opposite
// things depending on its context.

// Spread Syntax (...): “Spreads out” the elements of an iterable (like an array or object)
// into another. It is used for creating shallow copies and merging.

// In Array

const baseIngredients = ['flour', 'sugar'];
const allIngredients = ['Oil', ...baseIngredients, 'Rice'];

console.log("Array spread operator:", allIngredients)

// In Object

const user = { id: 1, name: 'Alex' };

const userWithRole = { ...user, role: 'admin', isActive: true };

console.log(`Object spread operator:`, userWithRole)


// Rest Parameter (...): “Gathers” the rest of some values together. It is used in function
// arguments and destructuring.

// In Function Arguments:

const logRequest = function(api, ...headers) {
    console.log(`function rest operator:, api: ${api}, headers: ${headers}`)
}

logRequest('/api/users', 'Content-Type: application/json', 'Authorization: Bearer token');

function getNum(...numbers) {
  console.log(numbers)
}

getNum(2, 3, 4, 6)

const fullName = {firstName: "Divine", lastName: "Ezinwanne", surname: "Ajaegbu"};

const getFullName = (user) => {
    const {lastName: native_name, ...others} = user

    console.log(native_name);
    console.log(others);
}

getFullName(fullName);