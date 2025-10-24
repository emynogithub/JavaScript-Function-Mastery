import axios from "axios"

/*🌐 What Is an API?

API (Application Programming Interface) allows your app to 
communicate with a server or another application — for example, 
fetching data, creating, updating, or deleting data.
*/

// 🟢 1. GET – Retrieve data
// ✅ Use GET when you want to read or fetch data.

// Using axios
const getUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(response.data);
};

// Using fetch
const getUsers2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};


// 🟡 2. POST – Create data
// ✅ Use POST to add new records.

// Using axios
const addUser = async () => {
  const newUser = {
    name: "Divine",
    email: "divine@example.com"
  };
  const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  console.log(response.data);
};

// Using fetch
const addUser2 = async () => {
  const newUser = { name: "Divine", email: "divine@example.com" };
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  });
  const data = await res.json();
  console.log(data);
};

// 🟠 3. PUT – Replace existing data
// ✅ Use PUT when you want to completely replace an existing resource.


// Using axios
const updateUser = async (id) => {
  const updatedUser = {
    name: "Updated Divine",
    email: "updated@example.com"
  };
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser);
  console.log(response.data);
};

// Using fetch
const updateUser2 = async (id) => {
  const updatedUser = { name: "Updated Divine", email: "updated@example.com" };
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser)
  });
  const data = await res.json();
  console.log(data);
};


// 🟣 4. PATCH – Update part of data
// ✅ Use PATCH when you want to update only some fields.

// Using axios
const patchUser = async (id) => {
  const partialUpdate = { email: "newemail@example.com" };
  const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, partialUpdate);
  console.log(response.data);
};

// Using fetch
const patchUser2 = async (id) => {
  const partialUpdate = { email: "newemail@example.com" };
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partialUpdate)
  });
  const data = await res.json();
  console.log(data);
};

// 🔴 5. DELETE – Remove data
// ✅ Use DELETE when you want to remove data.

// Using axios
const deleteUser = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  console.log(`User with ID ${id} deleted.`);
};

// Using fetch
const deleteUser2 = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  });
  console.log(`User with ID ${id} deleted.`);
};




