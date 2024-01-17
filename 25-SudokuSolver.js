//Question
//Given a sudoku, fill the sudoku with right values


//Solution


const findcurrentquad = (row, col) => {
    if(row <=2){
        if(col <= 2){
            return 0
        }
        else if(col <= 5){
            return 1
        }
        else{
            return 2
        }
    }
    else if(row <= 5){
        if(col <= 2){
            return 3
        }
        else if(col <= 5){
            return 4
        }
        else{
            return 5
        }
    }
    else{
        if(col <= 2){
            return 6
        }
        else if(col <= 5){
            return 7
        }
        else{
            return 8
        }
    }
}

const sudokusolver = (arr, rowr, colr, quads) => {


    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(arr[i][j] == 0){
                for(let k=1;k<=9;k++){
                    currentquad = findcurrentquad(i,j)
                    if(!rowr[i][k] && !colr[j][k] && !quads[currentquad][k]){
                        rowr[i][k] = 1
                        colr[j][k] = 1
                        quads[currentquad][k] = 1

                        arr[i][j] = k
                        if(i==arr.length-1 && j==arr[0].length-1 ){
                            console.log(arr)
                        }
                        if(sudokusolver(arr, rowr, colr, quads)){
                            return true
                        }
                        else{
                            arr[i][j] = 0

                            rowr[i][k] = 0
                            colr[j][k] = 0
                            quads[currentquad][k] = 0
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}


//Inputs

let input = [
    [0,8,6,0,0,0,0,5,9],
    [0,0,9,0,1,0,0,0,0],
    [0,4,0,8,0,0,7,2,0],
    [4,0,8,5,0,9,2,3,6],
    [5,0,2,0,6,0,0,0,0],
    [7,0,3,1,2,8,0,9,4],
    [0,2,0,0,0,0,0,0,7],
    [0,0,0,0,4,1,9,6,0],
    [0,0,4,9,0,7,0,0,0]
]

let row = new Array(input.length)
let col = new Array(input.length)
let quads = new Array(input.length)

for(let i=0;i<quads.length;i++){
    quads[i] = new Array(input.length+1).fill(0)
}

for(let i=0;i<input.length;i++){
    row[i] = new Array(input.length+1).fill(0)
    col[i] = new Array(input.length+1).fill(0)
    for(let j=0;j<input.length;j++){
        row[i][input[i][j]] = 1
        col[i][input[j][i]] = 1
        let curquad = findcurrentquad(i,j)
        quads[curquad][input[i][j]] = 1
    }
}


sudokusolver(input,row, col, quads)