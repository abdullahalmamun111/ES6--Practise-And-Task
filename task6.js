
const peoples = [
    {name: 'Meena', age: 20},
    {name: 'Raju', age: 21},
    {name: 'Rana', age: 10},

]
let ageArray = []

for( let people of peoples){
    ageArray.push(people.age)
}
let sum = ageArray.reduce((p,c) =>  p + c, 10)
console.log(sum);