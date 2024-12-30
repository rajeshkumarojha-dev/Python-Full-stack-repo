function Person(fname,lname,age){
    this.firstname=fname,
    this.lastname=lname,
    this.age=age
}
Person.prototype.sayHI=function(){
    console.log("HI")
}

let person1=new Person("Rajesh",'kumar',23)
console.log(person1);
console.log(Person.sayHI());
