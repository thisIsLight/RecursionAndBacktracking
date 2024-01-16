//Question
//Given an array, return the subsets of the array


//Solution

const subsets = (arr, index, res, current) => {
    if(index == arr.length){
        res.push([...cur])
        return
    }
    current.push(arr[index])
    subsets(arr, index+1, res, current)
    current.pop()
    subsets(arr, index+1, res, current)
}


//Inputs

let input = [1,2,3]

let output = []
let cur = []
subsets(input, 0, output, cur)

console.log(output)