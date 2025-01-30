


// # Reverse a string

// let str='helloworld';

// let reverse=str.split('').reverse().join('')
// console.log(str)
// console.log(reverse)


// # palindrome check

// let str= 'madam'

// let reverse=str.split('').reverse().join('')

// if(str===reverse){
//     console.log('palindrome')
// }
// else{
//     console.log('not palindrome')
// }



// # find max number in array

// let array=[10,1,4,2,5,6,8]
// let arr=Math.max(...array)
// console.log(arr);


// # fibonacci

// function fibonacci(num){
//     let a=0,b=1
//     for(let i=0; i<=num;i++){
//         let temp=a+b
//         a=b
//         b=temp
//     }
//     return b
// }
// console.log(fibonacci(4));


// merge array

let arr=[1,2,3,4]
let arr1=[4,5,6,7,8]

let arr3= [...arr,...arr1]

let unique=[...new Set(arr3)].filter(num=>num>4)

console.log(arr3);
console.log(unique);


