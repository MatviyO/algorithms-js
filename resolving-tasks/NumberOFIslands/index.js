let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];

let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];

let numsIslands = function (grid) {

    let counter = 0;
    let rowL = grid.length
    let colsL = grid[0].length
    if(rowL === 0) return 0

    function merkNeighour(grid, r,c) {
        grid[r][c] = '6'
        if (grid[r][c -1] === '1') {merkNeighour(grid,r ,c -1)}
        if (grid[r][c + 1] === '1') {merkNeighour(grid,r ,c + 1)}
        if (grid?.[r-1]?.[c] === '1') {merkNeighour(grid,r - 1,c )}
        if (grid?.[r+ 1]?.[c] === '1') {merkNeighour(grid,r + 1,c )}
    }

    for (let r = 0; r < rowL; r++) {
        for(let c =0; c < colsL; c++) {
            if (grid[r][c] === '1') {
                counter++;
                merkNeighour(grid, r, c)
            }
        }
    }

    return counter
}

console.log(numsIslands(grid1))
console.log(numsIslands(grid2))
