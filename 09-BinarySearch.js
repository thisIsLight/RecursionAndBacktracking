//Question
//Perform binary search using recursion


//Solution

const binsearch = (arr, s, e, key) => {
    if(s > e){
        return false
    }

    let mid = s + Math.floor((e-s)/2)
    if(arr[mid] == key){
        return true
    }
    else if(arr[mid] > key){
        return binsearch(arr, s,e-1,key)
    }
    else{
        return binsearch(arr, s+1, e, key)
    }
}


//Inputs

let input1 = [23,34,343,43,323,4,25,35,45,345,345,34534,534534,5345,34534534,634,346,3463453,234,23531636,13769,8794,78367,276547653,9746,63724,7635,74546,93736,23]
let input2 = 23531636

console.log(binsearch(input1.sort((a,b) => {
    return a-b
}), 0, input1.length-1, input2))