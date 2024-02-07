// Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

function Vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed;
  this.fuelType = fuelType; 
}

// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// accelerate() should increase the speed of the vehicle.
// brake() should decrease the speed.
// refuel() should log a message indicating the vehicle is refueling.

Vehicle.prototype.accelerate = function () {
  this.speed += 5;
}

Vehicle.prototype.brake = function () {
  this.speed -= 5;
}

Vehicle.prototype.refuel = function () {
  console.log(`${this.constructor.name} is refueling`);
}

// Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

function Car(brand, model, speed, fuelType, numberOfWheels) {
  Vehicle.apply(this, [brand, model, speed, fuelType]);
  this.numberOfWheels = numberOfWheels;
}
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.honk = function () {
  console.log("honking sound");
}
// Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
  Vehicle.apply(this, [brand, model, speed, fuelType]);
  this.numberOfEngines = numberOfEngines;
  this.hasLandingGear = hasLandingGear;
}
Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype);

Airplane.prototype.takeOff = function () {
  console.log('the airplane is taking off');
}

// Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.

// for Car [brand, model, speed, fuelType, numberOfWheels]
// for Airplane [brand, model, speed, fuelType, numberOfEngines, hasLandingGear]

let Car1 = new Car("Toyota", 2023, 250, 'diesel', 4);
let Airplane1 = new Airplane("AirIndia", 2020, 300, 'gasoline', 2, 'Yes')

Car1.accelerate()
Car1.refuel()
Car1.brake()
Airplane1.accelerate()
Airplane1.brake()
Airplane1.refuel()

console.log(Car1);
console.log(Airplane1);

