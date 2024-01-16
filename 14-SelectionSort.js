//Question
//Given an array, perform a bubble sort using recursion


//Solution


const bubblesort = (arr, index) => {
    if(index >= arr.length){
        return
    }
    let max = -Infinity
    let maxind = -1
    for(let i=index;i<arr.length;i++){
        if(max < arr[i]){
            maxind = i
            max = arr[i]
        }
    }

    let temp = arr[index]
    arr[index] = arr[maxind]
    arr[maxind] = temp

    bubblesort(arr, index+1)
}


//Inputs

let input = [123,78,245,78,34565879,3567,25,2134,7,8,674,563,31234,5,234557657,765743465,235453,3543425,46,346]

bubblesort(input, 0)

console.log(input)