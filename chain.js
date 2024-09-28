const data = [{id:1, name:'abdullah', address:'rangpur'}]
console.log(data[0].address);

const products = {
    count : 5000 ,
    data: [
        {id:1 , name:'lenovo', price:50000},
        {id:2 , name:'macbook', price:150000},
    ]
}
console.log(products.data[1].price);

const user = {
    id:500,
    name:'abdullah',
    address:{
        street:{
            first:'nimnagar',
            second:'balubari',
            third:'dinajpur'
        },
    },
}

console.log(user.address.street.second)