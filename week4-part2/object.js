// A more complex object representing a server configuration
const serverConfig = {
'host-name': 'api.myservice.com', // key with a hyphen
port: 8080,
useHTTPS: true,
modules: ['auth', 'logging', 'database'],
database: { // A nested object
type: 'PostgreSQL',
poolSize: 20
}
};


console.log(serverConfig["host-name"]);
console.log(serverConfig.modules[2]);
console.log(serverConfig.database.poolSize)


// Dynamic Properties: Computed Property Names 
console.log("============Dynamic Properties===========")

let dynamicKey = 'userRole';
let permissionLevel = 'access_level';

let user = {
username: 'arch_dev',
[dynamicKey]: 'administrator', // The key is set to 'userRole'
[permissionLevel + '_code']: 5 // The key is set to 'access_level_code'
};

// The user object is now: { username: 'arch_dev', userRole: 'administrator', access

console.log(user[dynamicKey]);

// Methods: Giving Objects Behavior & The this Keyword When the value of a
// property is a function, it is called a method. Methods define the actions an object can
// perform.

const server = {
host: 'localhost',
port: 3000,
status: 'stopped',
start: function() {
this.status = 'running';
// 'this' refers to the 'server' object itself
console.log(`Server is now ${this.status} on http://${this.host}:${this.port}`)
 }
}

server.start();


/*
Iterating Over Objects You cannot use a standard for loop or .forEach() to iterate
over an object directly. Instead, you have several options built around iterating over its
properties.
*/

// • for...in loop: This loop iterates over the keys (property names) of an object.
console.log("==========for in loop===========")
const userType = { name: 'Alex', role: 'admin' };

console.log(userType['name'])

for(const key in userType) {
    // console.log(`${key}: ${userType[key]}`)

    /*
    ✅ Use it when:
   You just want to go through all keys and their values in an object quickly.

⚠️ Be careful:
  for...in also loops through inherited properties (if any), not only the object’s own keys.
   To avoid that, you can use:
*/

    if (userType.hasOwnProperty(key)) {
       console.log(`KEY -> ${key}: ${userType[key]}`);
}
}

/*
🧩 2. Object.keys()

This method creates an array of the object’s own keys only (not inherited).

Then, you can use array methods like .forEach(), .map(), or .reduce().
*/

console.log("=========Object.keys==========")

// ["name", "age", "role"]
const userAdmin = {
  name: "Divine",
  age: 25,
  role: "Frontend Engineer"
};


Object.keys(userAdmin).forEach(key => {
    console.log(`${key}: ${userAdmin[key]}`)
})

console.log(Object.keys(userAdmin));

console.log("=============Object.values===========");

// 🟣 Object.values(obj)

// ➡️ Returns an array of all the values in the object.

console.log(Object.values(userAdmin)); 
// ["Divine", 25, "Frontend Developer"]

console.log("===========🟡 Object.entries(obj)==========")
// ➡️ Returns an array of key-value pairs, where each pair is an array itself.

// [
//   ["name", "Divine"],
//   ["age", 25],
//   ["role", "Frontend Developer"]
// ]

console.log(Object.entries(userAdmin))

// This one is very powerful because it lets you use loops or 
// array methods like forEach, map, or reduce easily on objects.

Object.entries(userAdmin).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

console.log("================Values vs Reference=========")

// Values are for primitive and reference is for non-primitive type

console.log("=========Value====")
let a = 5;
let b = a;
b = 10;

console.log(a); // 5 (unchanged)
console.log(b)


console.log("============Reference=========")
// ❗Both variables point to the same object.

let user1 = { name: "Divine" };
let user2 = user1; // copy the reference
user2.name = "Grace";

console.log(user1.name); // "Grace"
console.log(user2.name)


console.log("==============🧩 Ways to make a shallow copy:========")
// 1. 1️⃣ Using the spread operator
// 🟢 The spread operator ... copies the top-level properties into a new object.

const names = {
    firstName: "Divine",
    lastName: "Ajaegbu"
}

const age = {
    age: 26,
    role: "Software Engineer"
}

const nickName = {...names};

nickName.firstName = "adiva"
nickName['religion'] = "Christian"

console.log(nickName.firstName);
console.log(names.firstName)

console.log("==================Object.assign==================");

/*
Object.assign(target, source)
target → where you want to copy to (usually {} for a new object)

source → the object you’re copying from
*/

const obj = Object.assign({}, nickName)

console.log(obj)

const merged = Object.assign({}, age, names);

console.log(merged)