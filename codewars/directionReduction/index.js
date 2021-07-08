function directionReduction(arr) {
    const oppositeDirs = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST'
    }
    
    return arr.reduce((acc, el) => {
        if (acc[acc.length -1] === oppositeDirs[el]) {
            acc.pop()
        } else {
            acc.push(el)
        }
        return acc;
    }, [])
}
