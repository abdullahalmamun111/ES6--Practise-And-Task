const products = [
    {id:1, name:'lenovo',price: 50000},
    {id:2, name:'vivo',price: 5000},
    {id:3, name:'mac',price: 150000}
]

// map
const name = products.map(name => name.price);
console.log(name);

// forEach
products.forEach(p => console.log(p.name))