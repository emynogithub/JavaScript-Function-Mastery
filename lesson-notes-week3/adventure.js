// 1. Character Setup:
const characterName = 'Alex';

let health = 100;

const hasTorch = true;

// 2. The First Choice:

const choice = 'enter'; // Try changing to 'wait' later

// 3. The First if/else Block:

if (choice === '') {
console.log(characterName + ' enters the dark cave...');
if (hasTorch === true) {
console.log('The path is lit by the torch!');
} else {
console.log('It is pitch black... You stumble and lose 20 health.');
health = health - 20;
}
} else {
console.log(characterName + ' decides to wait outside.');
}


// Convert to switch statements

console.log("============Used Switch Statements======")

switch(choice) {
    case '':
     console.log(characterName + ' enters the dark cave...');
    switch(hasTorch) {
        case true:
        console.log('The path is lit by the torch!');
        break;

        default:
         console.log('It is pitch black... You stumble and lose 20 health.');
         health = health - 20;  
    } 
  break; 

    
    default:
    console.log(characterName + ' decides to wait outside.');   
}

