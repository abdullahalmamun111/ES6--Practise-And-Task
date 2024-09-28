const players = [45,50,55,60,36,85,40,55,69,54,54,80,78,90,89];
const selected = players.filter(num => num > 50);
console.log(selected);

const selected2 = players.filter(num => num % 2 == 0);
console.log(selected2);


const friends = ['tom','jom','Michel','Einstien','Steve','Taylor'];
const evenLetter = friends.filter(char => char.length % 2 == 0);
console.log(evenLetter);