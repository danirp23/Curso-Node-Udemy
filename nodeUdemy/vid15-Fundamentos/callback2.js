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

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDb = salarios.find( salario => salario.id === empleado.id );
    if( !salarioDb ){
        callback(`No se encontro un salario para el usuario ${ empleado.nombre}`);
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDb.salario,
            id: empleado.id
        });
    }
}
getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${ salario.nombre} es de ${ salario.salario }$`);
    });
});

