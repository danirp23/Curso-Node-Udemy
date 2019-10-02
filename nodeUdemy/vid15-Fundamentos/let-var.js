//Se puede inicializar y declarar mil veces
//en cambio let no, esta es solo una vez, let es como en Java


let nombre = 'wolverine';
if (true) {
    var nombre1 = 'magneto';
}

// si el i es var se vuelve como global de alli para abajo
for (let i = 0; i <= 5; i++) {
    console.log(`ì: ${i}`);
}

console.log(i);