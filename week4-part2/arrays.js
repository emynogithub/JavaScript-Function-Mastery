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


console.log("=====================filter and map together==============")
let forms = [{
    name: "Chizoba Ajaegbu",
    age: 35,
    religion: "Christian",
    email: "chizoba@gmail.com"
},

{
    name: "Gideon Arinze",
    age: 35,
    religion: "Christian",
    email: "chizoba@gmail.com"
},

{
    name: "Divine Ajaegbu",
    age: 25,
    religion: "Christian",
    email: "chizoba@gmail.com"
},

{
    name: "Shedrack Ajaegbu",
    age: 21,
    religion: "Christian",
    email: "chizoba@gmail.com"
},
]

const getForm = forms.filter(form => {
    return form.age === 35;
})

const getNewForm = getForm.map(form => form.name)

console.log(getNewForm)

console.log("================Task==============")
// find the total
// number of unique IP addresses that accessed a specific critical endpoint (/api/admin)

const logs = [
{ ip: '1.1.1.1', endpoint: '/api/users' },
{ ip: '2.2.2.2', endpoint: '/api/admin' },
{ ip: '1.1.1.1', endpoint: '/api/products' },
{ ip: '3.3.3.3', endpoint: '/api/admin' },
{ ip: '2.2.2.2', endpoint: '/api/admin' },
];

const uniqueAdminIPs = logs
.filter(log => log.endpoint === '/api/admin') // 1. Select only admin logs
.map(log => log.ip) // 2. Extract just the IP addresses
.reduce((uniqueIPs, ip) => { // 3. Reduce to a set of unique IPs
if (!uniqueIPs.includes(ip)) {
uniqueIPs.push(ip);
}
return uniqueIPs;
}, []) // Start with an empty array for unique IPs
.length; 

console.log(uniqueAdminIPs)