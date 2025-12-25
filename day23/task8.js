class Vehicle {
  drive() {
    return "Vehicle is moving.";
  }
}

class Car extends Vehicle {
  wheels() {
    return "Car has 4 wheels.";
  }
}

class ElectricCar extends Car {
  charge() {
    return "Electric car is charging.";
  }
}

let tesla = new ElectricCar();

console.log(tesla.drive());
console.log(tesla.wheels());
console.log(tesla.charge());