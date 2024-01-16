//Question
//Given a string, return the subsequence of the string


//Solution

const subsequence = (arr, index, res, current) => {
    if(index == arr.length){
        res.push(`${current}`)
        return
    }
    subsequence(arr, index+1, res, current+arr[index])
    subsequence(arr, index+1, res, current)
}


//Inputs

let input = 'abc'

let output = []
let cur = ''
subsequence(input, 0, output, cur)

console.log(output)