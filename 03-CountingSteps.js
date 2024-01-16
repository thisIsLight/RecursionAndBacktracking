//Question
//Print the numbers in counting order of the given number


//Solution


const countnumber = (n) => {
    if(n == 0){
        return 
    }
    countnumber(n-1)
    console.log(n)
}


//Inputs

let input = 5

countnumber(15)