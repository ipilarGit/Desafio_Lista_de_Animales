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

  mostrarDatosPropietario() {
    return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion} y el número telefónico de contacto es: ${this._telefono}. `;
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

  mostrarDatosAnimal() {
    return `El nombre del animal es: ${this._nombreAnimal}. Siendo este un ${this._tipo}`;
  }
}

class Perro extends Animal {
  constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
    super(nombre, direccion, telefono, nombreAnimal, tipo);
    this._enfermedad = enfermedad;
  }
  getEnfermedad() {
    return this._enfermedad;
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
    return this._enfermedad;
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
    return this._enfermedad;
  }

  setEnfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}

let nombrePropietario = "";
let direccion = "";
let telefono = 0;
let nombreMascota = "";
let tipo = "";
let enfermedad = "";

const validarFormulario = (nombrePropietario, telefono) => {
  let validacion = true;

  let validaPropietario = /[a-zA-Z]/gim;
  if (validaPropietario.test(nombrePropietario) === false) {
    let errorP = document.querySelector(".errorPropietario");
    errorP.innerHTML = "Ingrese un nombre válido";
    validacion = false;
  }

  let validaTelefono = /\d/gim;
  if (validaTelefono.test(telefono) == false) {
    let errorT = document.querySelector(".errorTelefono");
    errorT.innerHTML = "Ingrese un teléfono valido (solo números)";
    validacion = false;
  }
  return validacion;
};

const capturarDatos = () => {
  nombrePropietario = document.getElementById("propietario").value;
  direccion = document.getElementById("direccion").value;
  telefono = document.getElementById("telefono").value;
  nombreMascota = document.getElementById("nombreMascota").value;
  tipo = document.getElementById("tipo").value;
  enfermedad = document.getElementById("enfermedad").value;
  tipoM = tipo;
};

const instanciarMascota = (tipoM) => {
  if (tipoM == "perro") {
    const perro = new Perro(
      nombrePropietario,
      direccion,
      telefono,
      nombreMascota,
      tipo,
      enfermedad
    );
    perro.setEnfermedad(enfermedad);
    mascotas.push(perro);

    let resultadoagregado = document.getElementById("resultadoagregado");
    resultadoagregado.innerHTML = `
          <li>${perro.mostrarDatosPropietario()}</li>
          <li>${perro.mostrarDatosAnimal()} y su enfermedad es: ${perro.getEnfermedad()}</li>`;
  }

  if (tipoM == "gato") {
    const gato = new Gato(
      nombrePropietario,
      direccion,
      telefono,
      nombreMascota,
      tipo,
      enfermedad
    );

    gato.setEnfermedad(enfermedad);
    mascotas.push(gato);
    let resultadoagregado = document.getElementById("resultadoagregado");
    resultadoagregado.innerHTML = `
          <li>${gato.mostrarDatosPropietario()}</li>
          <li>${gato.mostrarDatosAnimal()} y su enfermedad es: ${gato.getEnfermedad()}</li>`;
  }

  if (tipoM == "conejo") {
    const conejo = new Conejo(
      nombrePropietario,
      direccion,
      telefono,
      nombreMascota,
      tipo,
      enfermedad
    );

    conejo.setEnfermedad(enfermedad);
    mascotas.push(conejo);
    let resultadoagregado = document.getElementById("resultadoagregado");
    resultadoagregado.innerHTML = `
          <li>${conejo.mostrarDatosPropietario()}</li>
          <li>${conejo.mostrarDatosAnimal()} y su enfermedad es: ${conejo.getEnfermedad()}</li>`;
  }
};

const imprimirDatos = () => {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  mascotas.forEach((mascota, i) => {
    tbody.innerHTML += `
        <tr>                    
          <td>${mascota._nombre}</td>
          <td>${mascota._direccion}</td>
          <td>${mascota._telefono}</td>
          <td>${mascota._nombreAnimal}</td>
          <td>${mascota._tipo}</td>
          <td>${mascota._enfermedad}</td>
          <td><button class="btn btn-danger" onclick="eliminarAnimal(${i})">Eliminar</button></td>
        </tr>`;
  });
};

const limpiarErrores = () => {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  let errorPropietario = document.querySelector(".errorPropietario");
  errorPropietario.innerHTML = "";

  let errorTelefono = document.querySelector(".errorTelefono");
  errorTelefono.innerHTML = "";
};

const limpiarFormulario = () => {
  nombrePropietario = document.getElementById("propietario");
  nombrePropietario.value = "";

  direccion = document.getElementById("direccion");
  direccion.value = "";

  telefono = document.getElementById("telefono");
  telefono.value = "";

  nombreMascota = document.getElementById("nombreMascota");
  nombreMascota.value = "";

  enfermedad = document.getElementById("enfermedad");
  enfermedad.value = "";
};

const resultadoExitoso = () => {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = "Se ha agregado la consulta de manera exitosa!!!";
};

const eliminarAnimal = (i) => {
  mascotas.splice(i, 1);
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = "Se ha eliminado la consulta de manera exitosa!!!";
  imprimirDatos();
};

let mascotas = [];
let tipoM;

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  capturarDatos();
  limpiarErrores();

  let resultado = validarFormulario(nombrePropietario, telefono);

  if (resultado == true) {
    resultadoExitoso();
    instanciarMascota(tipoM);
    imprimirDatos();
    limpiarFormulario();
  }
});
