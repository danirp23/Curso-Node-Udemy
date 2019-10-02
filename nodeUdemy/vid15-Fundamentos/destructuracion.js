let dead = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

/* let nombre = dead.nombre;
let apellido = dead.apellido;
let poder = dead.poder; */
//de un lado como se llama en el objeto(nombre) y del otro como lo quiero llamar(primer nombre)
let { nombre: primernombre, apellido, poder } = dead;


console.log(primernombre, apellido, poder);