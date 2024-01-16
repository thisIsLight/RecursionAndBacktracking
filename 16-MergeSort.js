//Question
//Given an array, use merge sort to sort the given array


//Solution


const mergesort = (arr, start, end) => {
    if(start == end){
        return [arr[start]]
    }
    if(start > end){
        return []
    }
    let mid = start + Math.floor((end-start)/2)
    let arr1 = mergesort(arr, start, mid)
    let arr2 = mergesort(arr, mid+1, end)
    let res = merge(arr1,arr2)
    return res
}

const merge = (arr1, arr2) => {
    let i=0
    let j=0
    let res = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] > arr2[j]){
            res.push(arr2[j])
            j++
        }
        else{
            res.push(arr1[i])
            i++
        }
    }

    while(i<arr1.length){
        res.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
}


//Inputs


let input = [34,765,123,98,456,123,456,678]


console.log(mergesort(input, 0 , input.length-1))