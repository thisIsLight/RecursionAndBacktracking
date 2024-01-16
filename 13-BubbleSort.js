//Question
//Given an array, perform a bubble sort using recursion


//Solution


const bubblesort = (arr, index) => {
    if(index >= arr.length){
        return
    }
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < arr[i+1]){
            swap(arr,i,i+1)
        }
    }
    bubblesort(arr, index+1)
}

const swap = (arr, index, maxind) => {
    let temp = arr[index]
    arr[index] = arr[maxind]
    arr[maxind] = temp
}


//Inputs

let input = [123,78,245,78,34565879,3567,25,2134,7,8,674,563,31234,5,234557657,765743465,235453,3543425,46,346]

bubblesort(input, 0)

console.log(input)