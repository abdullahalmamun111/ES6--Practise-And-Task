const array = [2,3,4,5,6,7,10];

 function doubleIt(num) {
   return num * 2 ;
}

const result = array.map(doubleIt);
console.log(result);

// normal way
const array2 = [14,15,16,17,18,20];
// function double2(num){
//     return num * 2;
// }

// arrow function

const double2 = num => num * 2 ;
const result2 = array2.map(double2)
console.log(result2);