const orders = [
{ amount: 250, status: 'shipped' },
{ amount: 50, status: 'pending' },
{ amount: 400, status: 'shipped' },
];

const filter = orders.filter(order => {
    return order.amount < 200 && order.status === 'pending'
})

console.log(filter)

const products = [
{ name: 'Laptop', category: 'Electronics' },

{ name: 'T-Shirt', category: 'Apparel' },
{ name: 'Keyboard', category: 'Electronics' },
]

const reduceProducts = products.reduce((acc, current) => {
    const category = current.category;

    console.log(category)

      if(!acc[category]) {
        acc[category] = []
      }

      acc[category].push(current)

      return acc;
}, {})

console.log(reduceProducts)

