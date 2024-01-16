//Question
//Given a string, reverse the string


//Solution

const reverse = (str, index) => {
    if(index >= str.length){
        return ''
    }

    return reverse(str, index+1)+str[index]
    
}


//Inputs

let input = 'sahil'
console.log(reverse(input, 0))