//Question
//Given a number, calculate the factorial of that number


//Solution

const factorial = (n) => {
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }

    let res = n*factorial(n-1)
    return res
}


//Input

let input = 5

console.log(factorial(input))