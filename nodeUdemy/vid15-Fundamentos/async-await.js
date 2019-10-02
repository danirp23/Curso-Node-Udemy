/** 
 * Asyng await
 */

 /* let getNombre = async() =>{
    return 'Daniela';
 } */
 //Async es lo mismo que tener return new Promise

 let getNombre = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve ('Dani');
        },3000)
    });
 }

 let saludo = async () =>{
    
    let nombre = await getNombre();

    return `Hola ${ nombre }`;
 };

 /* getNombre().then(nombre =>{
    console.log(nombre);
 })
 .catch(e => {
     console.log('Error: ', e);
 }); */
 saludo().then(mensaje =>{
    console.log(mensaje);
 });