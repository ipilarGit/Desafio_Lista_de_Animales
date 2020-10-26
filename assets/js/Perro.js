import Animal from "./Animal";
class Perro extends Animal {
  constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
    super(nombre, direccion, telefono, nombreAnimal, tipo);
    this._enfermedad = enfermedad;
  }

  getEnfermedad() {
    return {
      enfermedad: this._enfermedad,
    };
  }
  setEnfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}

export default Perro;
