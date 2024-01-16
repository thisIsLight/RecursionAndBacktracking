//Question
//Performa linear search on an array using recursion


//Solution

const linsearch = (arr, index, key) => {
    if(index >= arr.length){
        return false
    }
    if(arr[index] == key){
        return true
    }

    return linsearch(arr, index+1, key)
}


//Inputs

let input1 = [34,535,34534,534,5345,345,345345,435,3453,4543,34534,534,534,5,34534543,54,54,54,54,54,5,5,5,54,54,54,54,54]
let input2 = 34534543

console.log(linsearch(input1, 0, input2))