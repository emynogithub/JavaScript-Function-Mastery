/*
🧨 Mutating methods (they change the original array):

push()    // adds item to the end
pop()     // removes the last item
shift()   // removes the first item
unshift() // adds item to the beginning
splice()  // adds or removes items anywhere
sort()    // changes order in place
reverse() // reverses order in place
*/

/*
🧊 Non-mutating methods (they make a new array):
map()
filter()
slice()
concat()
reduce()

These methods do not touch the original array.
They create and return a new array or new value instead.
*/

const dbUsers = [
{ user_id: 1, first_name: 'Alex', is_active: 1 },
{ user_id: 2, first_name: 'Jane', is_active: 0 },
{ user_id: 2, first_name: 'Jane', is_active: 1}
];

const userDTO = dbUsers.map(dbUser => {
    return {
        id: dbUser.user_id,
        name: dbUser.first_name,
        is_active: dbUser.is_active
    }
})

console.log(userDTO)

console.log("===========find=============");
// Get one specific element

const findUser = dbUsers.find(dbUser => {
    return dbUser.first_name === "Jane";
})

console.log(findUser)

console.log("===========filter============")
// Get many matching elements

const filterUser = dbUsers.filter(dbUser => dbUser.first_name === "Jane");

console.log(filterUser)

console.log("===============findIndex======");

// The index of the first match

const findIndexUser = dbUsers.findIndex(dbUser => dbUser.first_name === "Jane")

console.log(findIndexUser)

console.log("==================some===========");
// ✅ Yes — stops after it finds one true

const someUser = dbUsers.some(dbUser => dbUser.first_name === "Jane");

console.log(someUser)

console.log("===================every=============")
const everyUser = dbUsers.every(dbUser => dbUser.first_name === "Jane");

console.log(everyUser)