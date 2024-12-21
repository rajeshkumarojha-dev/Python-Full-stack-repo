

function sumNumber(){
    if(arguments.length==0){
        console.log('No argument pass')
    }
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum

}

console.log(sumNumber(2,3,4,16))