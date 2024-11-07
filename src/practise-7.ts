class Car {
  constructor(public make: string, public model: string, public year: number) {}

  public getCarAge() {
    const calculateYear = new Date().getFullYear() - this.year;
    // return `The car age is ${calculateYear} ${
    //   calculateYear <= 1 ? 'year' : 'years'
    // }`;

    return calculateYear;
  }
}

const car = new Car('Honda', 'Civic', 2018);
const carAge = car.getCarAge();
console.log(carAge);
