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

let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return (empleadoDB);
    }
};

let getSalario = async (empleado) => {

    let salarioDb = salarios.find(salario => salario.id === empleado.id);
    
    if (!salarioDb) {
        throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDb.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
};

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));