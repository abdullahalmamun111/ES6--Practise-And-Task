const instructor = [
    {name:"nodi",age:28,position:'Senior'},
    {name:"borsha",age:25,position:'junior'},
    {name:"sagor",age:30,position:'Senior'},
]

const senior = instructor.filter(serial => {
    if(serial.position === 'Senior'){
        return serial;
    }
})
console.log(senior);