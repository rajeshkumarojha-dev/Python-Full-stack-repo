

function sum(...args){
    result=0
    for(let i=0; i<args.length; i++){
        result+=args[i]
    }
    return result
}

console.log(sum(2,3,4,45,90,23));

