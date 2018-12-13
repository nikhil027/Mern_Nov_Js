function rover(a,b,c,d){
//type code here
    let xAxis = a, yAxis = b, initDir = c
    let dirArray = d.split('')
    let lDir = { 'N': 'W', 'W': 'S', 'S': 'E', 'E': 'N' }
    let rDir = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N' }

    dirArray.forEach(function (dir) {
        if (dir == 'L') {
            initDir = lDir[initDir]
        } else if (dir == 'R') {
            initDir = rDir[initDir]
        } else if (dir == 'M') {
            switch(initDir){
                case ('N'): yAxis += 1
                            break;
                case ('S'): yAxis -= 1
                            break;
                case ('E'): xAxis += 1
                            break;
                case ('W'): xAxis -=1
                            break;
            }
        }

    })

    let retStr = xAxis + ' ' + yAxis + ' ' + initDir
    return retStr
}

console.log(rover(1,2,'N','LMLMLMLMM'))