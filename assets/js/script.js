// creando clases y su herencia
class Propietario {
    constructor (nombre,direccion,telefono) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietario() {
        return `El nombre del dueño es: "${this.nombre}". Su domicilio es: ${this.direccion} y el número telefónico de contacto es : ${this.telefono}`;
      }
    
}

class Animal extends Propietario {
    constructor(nombre,direccion,telefono,tipo) {
        super(nombre,direccion,telefono)
        this._tipo = tipo
    }
    get getTipo () {
        return `El tipo de animal es un: "${this._tipo}"`
    }
}

class Mascota extends Animal {
    constructor (nombre,direccion,telefono,tipo,nombreM,enfermedadM) {
        super(nombre,direccion,telefono,tipo)
        this._nombreM = nombreM
        this._enfermedadM = enfermedadM
    }
    get getNombreM () {
        return this._nombreM
    }
    set setNombreM (new_nombreM) {
        return this._nombreM = new_nombreM
    }

    get getEnfermedad () {
        return this._enfermedadM
    }
    set setEnfermedadM (new_enfermedadM) {
        return this._enfermedadM = new_enfermedadM
    }
}



const agregaDatos = (e) => {
    e.preventDefault()
    let nombreD = document.querySelector("#propietario").value
    let telefono = document.querySelector("#telefono").value
    let direccion = document.querySelector("#direccion").value
    let mascN = document.querySelector("#nombreMascota").value
    let enfermedad_m = document.querySelector("#enfermedad").value
    let tipo = document.querySelector("#tipo")
    let tipoM = tipo.options[tipo.selectedIndex].text

    if (nombreD == ""  || direccion == "" || mascN == "" || enfermedad_m == "" || telefono === "") {
        return alert ("Todos los datos son necesarios.")
    } if (isNaN(telefono)) {
        alert("El telefono debe ser un número sin espacios")
    } else {
    m1 = new Mascota (nombreD,direccion,telefono,tipoM,mascN,enfermedad_m)

    return document.querySelector("#resultado ul").innerHTML = 
             `<li>${m1.datosPropietario()}</li> 
              <li>${m1.getTipo}, mientras que el nombre de la mascota es: "${m1.getNombreM}" y la enfermedad es: ${m1.getEnfermedad}</li>`
    }
    

}
const form = document.querySelector("form")

form.addEventListener("submit", agregaDatos)