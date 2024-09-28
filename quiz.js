// if (true) {
//     let x = 10;
//     console.log(x); // 10
// }

// const obj = { name: "Alice" };
// obj.name = "Bob";
// console.log(obj)

const square = x => x * x ;
// console.log(square());

const obj ={
    value:10,
    getValue: function(){
        return () => this.value ;
    }
}
const fn = obj.getValue();
console.log(fn())