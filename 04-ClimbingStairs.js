//Question
//Given a staircae height and you can take either one step or two steps in one go
//Return all possible ways of reaching the top as well


//Solution


const climbingstairs = (n) => {
    if(n==0){
        return 1
    }
    if(n < 0){
        return 1
    }

    let takeone = climbingstairs(n-1)
    let taketwo = climbingstairs(n-2)

    return takeone+taketwo
}


//Inputs

let input = 5

console.log(climbingstairs(input))