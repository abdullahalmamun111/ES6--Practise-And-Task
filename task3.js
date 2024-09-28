const array = [3,1,4,5,6,7,8,9,11,23,11,41,13];
const odd = [];
for(let arrayEl of array){
    if(arrayEl % 2 == 1){
        arrayEl ++ ;
        odd.push(arrayEl)
    }
}
console.log(odd)

// task 3.2

const solidEven = [];
const even = array.map( num => {
    if(num % 2 === 1){
        num ++;
        solidEven.push(num);
    }
})
console.log(solidEven);