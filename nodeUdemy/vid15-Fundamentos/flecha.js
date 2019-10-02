function sumar(a, b) {
    return a + b;
}
let sumarFlecha = (a, b) => {
    return a + b;
}
let sumarFlecha1 = (a, b) => a + b;

let saludar = () => 'Hola Mundo';

console.log(saludar());
console.log(sumarFlecha1(10, 20));

let dead = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(dead.getNombre());