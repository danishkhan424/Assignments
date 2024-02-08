/*  Implement an inheritance model for four wheeler automobiles.
    Implement using both object.create() and constructor functions().
    Think of properties of what can be inherited. */
let vehicle = {
  wheels: 4,
  numberOfWindows: 4,
  doors: 4,
  hasBrake: "yes",
  hasAccelerator: "yes",
  gear: 1,
  Details: function (brand, modelName, color, modelYear, speed, fuelType) {
    this.brand = brand;
    this.color = color;
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.fuelType = fuelType;
    this.speed = speed;
  },
};

vehicle.brake = function () {
  this.speed -= 5;
};

vehicle.accelerator = function () {
  this.speed += 5;
};

vehicle.increaseGear = function () {
  if (this.gear <= 4) {
    this.gear+= 1;
  } else {
    console.log("this car has only 5 gear");
  }
};
vehicle.reduceGear = function () {
  if (this.gear > 0 && this.gear <= 5) {
    this.gear--;
  } else {
    console.log("car is already in 1st gear");
  }
};
vehicle.horn = function () {
  console.log("jaldi waha se hato...");
};

let car = Object.create(vehicle);
car.bodyMaterial = "iron";
car.steeringWheel = 1;
car.transmissionType = "manual";

car.Details("Mahindra", "Thar", "Black", 2023, 200, "diesel");

let Thar = car;

// Thar.brake();
// Thar.accelerator();
console.log(Thar);
Thar.increaseGear();
console.log(Thar);
Thar.increaseGear();
console.log(Thar);
Thar.increaseGear();
console.log(Thar);
Thar.increaseGear();
console.log(Thar);
Thar.increaseGear();
console.log(Thar);
// Thar.reduceGear();
// Thar.horn();