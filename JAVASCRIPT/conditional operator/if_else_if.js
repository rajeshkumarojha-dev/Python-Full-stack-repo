


let age=19;
let hasvoterCard='yes'

if(age>=18&&hasvoterCard=='yes'){
    console.log('You can vote')
}
else if(age>=18&&hasvoterCard=='no'){
    console.log('You can\'t vote get your voter id card');
}
else{
    console.log(`You can't vote because your age is ${age}`)
}