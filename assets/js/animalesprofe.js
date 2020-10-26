class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del propietario es 
    ${this._nombre}, vive en 
    ${this._direccion} y su teléfono es 
    ${this._telefono}`;
  }
}
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, _nombreAnimal, _nombreTipo) {
    super(nombre, direccion, telefono);
    this._nombreAnimal = _nombreAnimal;
    this._nombreTipo = _nombreTipo;
  }
  datosAnimal() {
    return `El nombre del animal es ${this._nombreAnimal} y el tipo es ${this._nombreTipo}`;
  }
}

class Mascota extends Animal {
  constructor(
    nombre,
    direccion,
    telefono,
    _nombreAnimal,
    _nombreTipo,
    _enfermedad
  ) {
    super(nombre, direccion, telefono, _nombreAnimal, _nombreTipo);
    this._enfermedad = _enfermedad;
  }
  getEnfermedad() {
    return this._enfermedad;
  }

  setEnfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}

const resultado = document.getElementById("resultado");
const boton = document.getElementsByTagName("button")[0]; //boton agregar

boton.addEventListener("click", function () {
  let propietario = document.getElementById("propietario").value; //input dueño
  let telefono = document.getElementById("telefono").value; //input telefono
  let direccion = document.getElementById("direccion").value; //input direccion
  let nombreMascota = document.getElementById("nombreMascota").value; //input nombre mascota
  let motivoConsulta = document.getElementById("enfermedad").value; //input motivo de la consulta
  let tipo = document.getElementById("tipo").value; // lista especie de animal

  const mascota = new Mascota(
    propietario,
    telefono,
    direccion,
    nombreMascota,
    tipo
  );
  mascota.setEnfermedad(motivoConsulta);
  resultado.insertAdjacentHTML(
    "beforeend",
    `${mascota.datosPropietario()} ${mascota.datosAnimal()}, la enfermedad por la cual vino es: ${mascota.getEnfermedad()} `
  );
});

/* 
const conejo = new Conejo(
  "Woody",
  "El cuarto de Andy",
  "123456",
  "Tiro al blanco",
  "Conejo",
  "Fiebre"
);

document.getElementById(
  "resultado"
).innerHTML = `${conejo.datosPropietario()} ${conejo.datosAnimal()}, la enfermedad por la cual vino es: ${conejo.getEnfermedad()} `;
 */
