const players = [45,50,55,60,36,85,40,55,69,54,54,80,78,90,89];

const result = players.filter( num => num % 10 === 0);
console.log(result)

const result1 = players.find( num => num % 10 === 0);
console.log(result1);