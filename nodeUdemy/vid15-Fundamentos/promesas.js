let empleados = [{
    id: 1,
    nombre: 'Daniela'
}, {
    id: 2,
    nombre: 'juan',

}, {
    id: 3,
    nombre: 'jennos',
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000

}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDb = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDb) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDb.salario,
                id: empleado.id
            });
        }
    });
}
// primera opcion de promesas
/* getEmpleado(3).then(empleado => {
    //console.log('Empleado de BD', empleado);

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    }, err => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
}); */

// segunda opcion para encadenar promesas
getEmpleado(3).then(empleado => {
    return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })
    .catch(err => {
        console.log(err);
    });