//Question
//Implement insertion sort for a given array


//Solution


const insertionsort = (arr, index) => {
    if(index >= arr.length){
        return
    }

    let key = arr[index]
    let start = index-1
    for(start;start>=0;start--){
        if(arr[start] > key){
            arr[start+1] = arr[start]
        }
    }
    arr[start+1] = key
    insertionsort(arr, index+1)
}


//Inputs


let input = [345,3451234,45,5657,67768,77,56,45,76,45,5,34234,123,13,987,234,567,423,7896,54,23]
insertionsort(input,1)
console.log(input)