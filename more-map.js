const number = [2,5,4,5,7,9,6,3,4,7];

const double = number.map(num => num * 2);
console.log(double);
const fiveAdd = number.map(num => num + 5);
console.log(fiveAdd);
const half = number.map(num => num / 2);
console.log(half);

const friends = ['tom','jom','Michel','Einstien','Steve','Taylor'];

const nameLength = friends.map(name => name.length);
console.log(nameLength);
const fLetter = friends.map(name => name[0]);
console.log(fLetter);