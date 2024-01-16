//Question
//Say digit of the number


//Solution

let digit = ['zero','one','two','three','four','five','six','seven','eight','nine']

const saydigit = (n) => {
    if(n == 0){
        return
    }
    let digits = n%10
    n = Math.floor(n/10)
    saydigit(n)
    console.log(digit[digits])
}


//Inputs

let input = 3454562354

saydigit(input)