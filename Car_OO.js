class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep"
    }
toString(){
    return `The Vehicle is a ${this.make} ${this.model} from ${this.year}`
}


}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
constructor(make, model, year){
    super(make, model,year);
    
}    
numWheels = 4;
}; 
let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model,year);
        
    }  
    revEngine(){  
        return 'VROOM!!!!!!'
    }   
    numWheels = 2;
    }; 
    let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

   class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Vehicles Only";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Lot is Full";
      }
      this.vehicles.push(newVehicle);
      return "Its in the Shop";
    }
  }

    
    let garage = new Garage(2);
    
    