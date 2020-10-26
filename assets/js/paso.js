function instanciarPerro() {
  const perro = new Perro(
    nombrePropietario,
    direccion,
    telefono,
    nombreMascota,
    tipo,
    enfermedad
  );
  return perro;
}


  console.log(getDatosPropietario());
  console.log(getDatosAnimal());
  console.log(getEnfermedad()); 


  id="textoAyuda" class="form-text text-muted">Nunca compartiremos tus datos.

   <div class="text-center mt-5">
      <p>Datos Agregados</p>
      <div id="resultado">
        <ul></ul>
      </div>