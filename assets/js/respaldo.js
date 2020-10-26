class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  getDatosPropietario() {
    return {
      nombre: this._nombre,
      direccion: this._direccion,
      telefono: this._telefono,
    };
  }
}

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

class Gato extends Animal {
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

class Conejo extends Animal {
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

const perro = new Perro(
  "Jonathan",
  "Santiago Centro",
  "988123456",
  "Jack",
  "Perro",
  "Dolor de muelas"
);

const conejo = new Conejo(
  "Isabel",
  "Santiago Centro",
  "988776655",
  "Flash",
  "Conejo",
  "Herida Leve"
);

console.loog("Pase por aquiiii222222");
console.log(conejo);
