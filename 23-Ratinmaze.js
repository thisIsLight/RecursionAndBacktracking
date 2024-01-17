//Question
//You are given a trap and a mouse. You need to print all the possible ways a mouse can take to visit
//the end


//Solution

let dir = [
    [0,1],
    [0,-1],
    [1,0],
    [-1.0],
]

let pathname = [
    'R',
    'L',
    'D',
    'U',
]

const canmove = (row, col, arr) => {
    if(row < arr.length && col < arr[0].length && row >= 0 && col >= 0 && arr[row][col] == 0){
        return true
    }
    return false
}

const ratinmaze = (arr, row, col, res, path, visited) => {
    if(row == arr.length-1 && col == arr[0].length-1){
        res.push(`${path}`)
        return
    }

    visited[row][col] = 1

    for(let i=0;i< dir.length;i++){
        let newr = row+dir[i][0]
        let newc = col+dir[i][1]
        if(canmove(newr, newc, arr) && !visited[newr][newc]){
            ratinmaze(arr, newr, newc, res, path+pathname[i], visited)
        }
    }

    visited[row][col] = 0
    return
}


//Inputs


let input = [
    [0,1,0,1],
    [0,0,0,0],
    [1,1,0,0],
    [0,0,0,0],
]

let output = []
let visited = new Array(input.length)
for(let i=0;i<visited.length;i++){
    visited[i] = new Array(input.length)
}
ratinmaze(input, 0, 0, output, '', visited)

console.log(output)
