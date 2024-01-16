//Question
//Given an array, return the power set of the array


//Solution

const powerset = (arr, index, res, current) => {
    if(index == arr.length){
        res.push([...cur])
        return
    }
    current.push(arr[index])
    powerset(arr, index+1, res, current)
    current.pop()
    powerset(arr, index+1, res, current)
}


//Inputs

let input = [1,2,3]

let output = []
let cur = []
powerset(input, 0, output, cur)

console.log(output)