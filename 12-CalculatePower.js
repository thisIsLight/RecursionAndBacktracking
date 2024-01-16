//Question
//Given two numbers a and its power b, find a^b


//Solution


const power = (a,b) => {
    if(b == 0){
        return 1
    }
    if(b == 1){
        return a
    }

    return a*power(a,b-1)
}


//Inputs

let input1 = 2
let input2 = 10

console.log(power(2,10))