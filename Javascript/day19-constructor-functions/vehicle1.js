// Object constructor function -- class defination
function Vehicle(data){
    this.name = data.name
    this.feul = data.fuel
    this.manufacturer = data.manufacturer
    this.type = data.type
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
let c1= new Vehicle({name: 'swift',manufacturer: 'maruti suzuki',fuel: 'petrol',type: 'hatchback'})
console.log(c1.name, c1.start())

