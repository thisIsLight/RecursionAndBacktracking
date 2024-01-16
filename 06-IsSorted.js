//Question
//GIven an array, you need to find if the array is sorted or not


//Solution

const issorted = (arr, index1,index2) => {
    if(index2 >= arr.length){
        return true
    }
    if(arr[index1] > arr[index2]){
        return false
    }

    return issorted(arr, index1+1, index2+1)
}


//Inputs

let input1 = [1,4,7,9,10,25]
let input2 = [1,4,7,39,10,25]

console.log(issorted(input1, 0,1))
console.log(issorted(input2, 0,1))