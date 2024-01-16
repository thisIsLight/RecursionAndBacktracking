//Question
//Perform quicksort on a given array


//Solution

const quicksort = (arr, start, end) => {
    if(start > end){
        return
    }

    let pivot = partitionpivot(arr,start,end)

    quicksort(arr, start, pivot-1)
    quicksort(arr, pivot+1, end)
}

const partitionpivot = (arr, start,end) => {
    let pivot = arr[end]
    let i = start-1
    
    for(let j=start;j<end;j++){
        if(arr[j] < [pivot]){
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i+1], arr[end]] = [arr[end], arr[i+1]]
    return i+1
}


//Inputs


let input = [234,765,45,7,8,345,98,453,65,34,8778,45,342]

quicksort(input, 0, input.length-1)

console.log(input)