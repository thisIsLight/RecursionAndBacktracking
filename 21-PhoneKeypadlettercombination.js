//Question
//You are given a phonepad and you have to find what are the different combinations that can be made using the 
//presed numbers


//Solution

let keypad = [
    [],
    [],
    ['a','b', 'c'],
    ['d','e', 'f'],
    ['g','h', 'i'],
    ['j','k', 'l'],
    ['m','n', 'o'],
    ['p','q', 'r', 's'],
    ['t','u', 'v'],
    ['w','x', 'y', 'z'],
]

const phonekeypadcomb = (arr, index, cur, res) => {
    if(index == arr.length){
        res.push(`${cur}`)
        return
    }

    for(let i=0;i<keypad[arr[index]].length;i++){
        phonekeypadcomb(arr, index+1, cur+keypad[arr[index]][i], res)
    }

}

//Inputs

let input = [7,8,9]

let output = []

phonekeypadcomb(input, 0, '', output)

console.log(output)