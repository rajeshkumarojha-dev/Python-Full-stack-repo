class Department {
    constructor(d) {
        this.department = d;
    }
    sayHI() {
        console.log('hello')
    }
}

let department = new Department("Developer")
console.log(department.sayHI())


let sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3));
