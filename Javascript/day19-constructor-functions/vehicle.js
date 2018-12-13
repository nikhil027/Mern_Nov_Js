// Object constructor function -- class defination
function Vehicle(name, fuel, manufacturer, type){
    this.name = name
    this.feul = fuel
    this.manufacturer = manufacturer
    this.type = type
    this.start = function(){
        return ('the car has started')
    }
    this.stop = function(){
        return ('the car has stopped')
    }
    this.move = function(){
        return 'The car is moving'
    }
}

//instantiating the object
let c1= new Vehicle('swift', 'petrol', 'maruti suzuki', 'hatchback')
console.log(c1.name, c1.start())

let c2= new Vehicle('dzire', 'petrol', 'maruti suzuki', 'sedan')
console.log(c2.name, c2.start())