function MarsRover(xPosition, yPosition, direction){
    this.xPosition = xPosition
    this.yPosition = yPosition
    this.direction = direction

    this.turnRight = function(){
        let rDir = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N' }
        this.direction = rDir[this.direction]
        return this.direction
    }
    this.turnLeft = function(){
        let lDir = { 'N': 'W', 'W': 'S', 'S': 'E', 'E': 'N' }
        this.direction = lDir[this.direction]
        return this.direction
    }
    this.moveForward = function(){
        switch(this.direction){
            case ('N'): yPosition += 1
                        break;
            case ('S'): yPosition -= 1
                        break;
            case ('E'): xPosition += 1
                        break;
            case ('W'): xPosition -= 1
                        break;
        }
        return [xPosition,yPosition]
    }
}


let manover = new MarsRover()
manover.xPosition = 1
manover.yPosition = 2
manover.direction = 'N'
console.log(manover.turnLeft())
//1 2 N

//LMLMLMLMM