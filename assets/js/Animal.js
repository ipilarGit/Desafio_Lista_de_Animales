import Propietario from "./Propietario";

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, nombreAnimal, tipo) {
    super(nombre, direccion, telefono);
    (this._nombreAnimal = nombreAnimal), (this._tipo = tipo);
  }
  getDatosAnimal() {
    return {
      nombreAnimal: this._nombreAnimal,
      tipo: this._tipo,
    };
  }
}

export default Animal;
