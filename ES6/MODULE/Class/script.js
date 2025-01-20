class Department {
    constructor(d) {
        this.department = d;
    }
    sayHI() {
        console.log('hello')
    }
}

class Employee extends Department{
    constructor(d,n){
        super(d)
        this.name=n
    }
}


let employee = new Employee("Developer","Rajesh Kumar")
console.log(employee);
console.log(employee.sayHI())


// let sum = (a, b) => {
//     return a + b
// }

// console.log(sum(2, 3));

let arr=[10,11,12,13,14,15]
let arr1=arr.map((val)=>val*2)
console.log(arr1)

arr.forEach(num=>{
    console.log(num)
})
console.log(arr);


