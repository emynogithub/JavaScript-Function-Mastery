console.log("-----------------------Cut things out (remove)------------")

const fruits = ["Carrot", "Banana", "Watermelon", "Orange"];

fruits.splice(0, 3);

console.log(fruits);

console.log("------------------Put things in (add)-----------------")

fruits.splice(1, 0, "Gova", "Avacado pear")

console.log(fruits)

console.log("------------------add after orange-------------")

fruits.splice(6, 0, "Lemon", "Mango")

console.log(fruits)

console.log("----------------Do both at the same time(replacement) 🪄--------")

fruits.splice(0, 1, "Cherry", "Grape");

console.log(fruits)

console.log("----------------Take everything from somewhere--------")

fruits.splice(7)

console.log(fruits)
