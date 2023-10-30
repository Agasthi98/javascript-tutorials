let carName = "Honda";

class Car {
  //static properties
  static numOfWheels = 4;

  //dynamic properties
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  //method
  start() {
    console.log(`${this.model} is starting...`);
  }
}

//create a instance of the car class
const myCar = new Car("Civic", 2019);

//access the properties
console.log(myCar.model);
console.log(myCar.year);
console.log(Car.numOfWheels);

myCar.start();
