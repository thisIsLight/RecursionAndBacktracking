//Question
//You are given a NxN board and you have t ofind a way so that N number of queens can
//be kept on the board. Return the positions of the queens


//Solution


const Nqueens = (arr, index, rowcheck, colcheck, zerotoNdiagonalcheck, Ntozerodiagonalcheck) => {
    if(index > arr[0].length){
        console.log(arr)
        return
    }

    for(let i=0;i<arr.length;i++){
        if(!rowcheck[i] && !colcheck[index] && !zerotoNdiagonalcheck[i+index] && !Ntozerodiagonalcheck[(arr.length-1)+(index-i)]){

            rowcheck[i] = 1
            colcheck[index] = 1
            zerotoNdiagonalcheck[i+index] = 1
            Ntozerodiagonalcheck[(arr.length-1)+(index-i)] = 1

            arr[i][index] = 1

            if(index == arr[0].length-1){
                console.log(arr)
            }
            Nqueens(arr, index+1,rowcheck,colcheck, zerotoNdiagonalcheck, Ntozerodiagonalcheck)
            arr[i][index] = 0

            rowcheck[i] = 0
            colcheck[index] = 0
            zerotoNdiagonalcheck[i+index] = 0
            Ntozerodiagonalcheck[(arr.length-1)+(index-i)] = 0
        }
    }

}


//Inputs

let input = 4


let board = new Array(input)
for(let i=0;i<board.length; i++){
    board[i] = new Array(input).fill(0)
}

console.log(board)

let rowcheck = new Array(board.length).fill(0)
let colcheck = new Array(board.length).fill(0)
let zerotoNdiagonalcheck = new Array(board.length*2).fill(0)
let Ntozerodiagonalcheck = new Array(board.length*2).fill(0)

Nqueens(board, 0, rowcheck, colcheck, zerotoNdiagonalcheck, Ntozerodiagonalcheck)