//Question
//Return sum of the given array


//Solution

const sumvalue = (arr, index) => {
    if(index >= arr.length){
        return 0
    }

    let res = arr[index] + sumvalue(arr, index+1)
    return res
}


//Inputs

let input = [3,4,6,45,6,4]

console.log(sumvalue(input, 0))