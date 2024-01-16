//Question
//Given a number, find the 2 to that poer that number


//Solution

const twopower = (n) => {
    if(n == 1){
        return 2
    }
    if(n == 0){
        return 1
    }

    let res = 2*twopower(n-1)
    return res
}


//Inputs

let input = 5

console.log(twopower(input))