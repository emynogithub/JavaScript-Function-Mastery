let names = {
    firstName: "John",  
    lastName: "Doe",
}

// Add a new property

names.age = 30;
names["country"] = "USA";

// Modify an existing property
names.firstName = "favor";

// delete a property

delete names.age;

console.log(names)


const propertyToAccess = 'model';

const myCar = { make: 'Toyota', model: 'Camry' };

const bracketNotationValue = myCar[propertyToAccess];

console.log(bracketNotationValue); // Output: Camry