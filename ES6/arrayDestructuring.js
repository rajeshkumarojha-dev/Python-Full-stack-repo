

// let arr=[12,13,14,15,16]

// let elm=arr[4]
// console.log(arr);
// console.log(elm);



// let book=['advanced Js',240,450]

// let[name,price,pages]=book

// console.log(name);
// console.log(price);
// console.log(pages);


function books(){
    return ['advanced Js',240,450,['Rajesh',24]]
}
let[name,price,pages,[author,age]]=books()

console.log(name);
console.log(price);
console.log(pages);
console.log(author);
console.log(age);

