//Question
//Print the permutation of a string


//Solution


const permutationofstring = (arr, index) => {
    if(index == arr.length){
        console.log(arr)
    }

    for(let i=index;i<arr.length;i++){
        swap(arr, i, index)
        permutationofstring(arr, index+1)
        swap(arr, i, index)
    }
}

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}


//Inputs


let input = [1,2,3]

permutationofstring(input, 0)