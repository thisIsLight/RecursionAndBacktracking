//Question
//Check if the given number is palindrome


//Solution


const checkpalindrome = (arr, index) => {
    if(index > Math.floor(arr.length/2)){
        return true
    }

    if(arr[index] != arr[arr.length-1-index]){
        return false
    }

    return checkpalindrome(arr, index+1)
}


//Inputs

let input = [1,2,3,3,2,1]

console.log(checkpalindrome(input, 0))