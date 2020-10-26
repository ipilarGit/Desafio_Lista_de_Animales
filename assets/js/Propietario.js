class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion =  direccion;
        this._telefono = telefono;
    }
    getDatosPropietario (){
        return {
            nombre: this._nombre,
            direccion: this._direccion,
            telefono: this._telefono            
        }
    }
}

export default Propietario
