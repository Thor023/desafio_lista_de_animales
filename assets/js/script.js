class Propietario{
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<ul> <li> <span>El nombre del dueño es: ${this.nombre} . El domicio es: ${this.direccion}, y el número telefonico de contacto: ${this.telefono}</span> </li> <li ><span>El tipo de animal es: ${this.tipo}, mientras que el nombre de la mascota es:${this.nombreMascota} y la enfermedad es: ${this.enfermedad}</span></li></ul>`
    }
}
class Animal extends Propietario{
    constructor(nombre, direccion, telefono,tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    tipoAnimal(){
        return `El tipo de animal es : ${this._tipo}.`
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(nuevoTipo){
        this._tipo = nuevoTipo;
    }
}
class Mascota extends Animal{
    constructor(nombre, direccion, telefono,tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono,tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota(){
        return this._nombreMascota;
    }
    set nombreMascota(nuevoNombreMascota){
        this._nombreMascota = nuevoNombreMascota;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
    }
}
let formulario = document.querySelector('form');

let registro = ()=>{
    let nombre = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipo = document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;

    let mascota = new Mascota(nombre, direccion, telefono,tipo, nombreMascota, enfermedad);
    return mascota;
}
let reciboDatos = (event)=>{
    event.preventDefault();
    document.getElementById('resultado').innerHTML="";
    const mascotaData = registro();
    mascotaData.datosPropietario();
} 
formulario.addEventListener("submit",reciboDatos);
