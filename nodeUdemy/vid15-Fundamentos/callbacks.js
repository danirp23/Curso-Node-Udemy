setTimeout(() => {
    console.log('Helow');
}, 0);

let getUserById = (id, callback) => {

    let user = {
        nombre: 'Fernando',
        id
    }

    if(id === 20){
        callback(`El user ${id} no existe`);
    }else{
        callback(null, user);
    }
    
};

getUserById(20, (err, user) => {
    if(err){
        return console.log(err);
    }
    console.log('user de bd' , user);
});
