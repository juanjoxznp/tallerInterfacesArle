// Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego
// crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una
// clase

interface IVehicle {
  model: string;
  year: number;
  color: string;
}

interface ICar extends IVehicle {
  numWheels: number;
  motor: number;
}

interface IMotorcycle extends IVehicle {
  numWheels: number;
  motor: number;
}

class Vehicle implements IVehicle {
  model: string;
  year: number;
  color: string;

  constructor(model: string, year: number, color: string) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

let auto = new Vehicle("Ferrari", 2014, "Blue");

console.log(auto);
