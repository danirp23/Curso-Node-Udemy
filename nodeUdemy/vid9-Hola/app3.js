console.log('Inicio del Programa');
//se ve como funciona la ejecucion asincrona
//Node crea el proceso main() {que toma todo aparentemente sincrono} esto pasa en app.js
//En app2 ejecuta la funcion saludar normal, y cuando 
//se dispara la funcion saludar va a ella, todo sincrono
//En app3 crea el main, resgitra el primer timeout y lo pone en espera,
//resgitra el segundo pero pasa a la pila de espera donde esta el primero tambien
//y lo mismo lo tercero, mientras ya pasaron 3 segundos
//entonces el segundo time lo pone en una pila de callbacks que son
//todos los procesos que estan listos para ser ejecutados pero que hay que esperar que la pila principal termine (main)
//entonces ejecuta el ultimo console, entonces los de 0 segundos ya se pueden ejecutar los pasa a la 
//pila principal, ahora pasan si pasa el primero pasa a la cola de collbacks
//y luego pasa a la pila de procesos.
setTimeout(function () {
    console.log('Primer Timeout');
}, 3000);
setTimeout(function () {
    console.log('segundo Timeout');
}, 0);
setTimeout(function () {
    console.log('tercero Timeout');
}, 0);

console.log('Fin del programa');
