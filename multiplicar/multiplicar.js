const fs = require('fs')
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`======================`.green)    
    console.log(`===== Tabla de ${ base } =====`.green)    
    console.log(`======================`.green)    
    for (let i = 1; i <= limite ; i++) {
        console.log(`${ base } x ${ i } = ${ base * i }`);
    }
}

let crearArchivo =  (base, limite = 10) => {
    return new Promise( (resolve, reject) => {        
        if(!Number(base)){
            reject(`El valor introducido "${ base }" no es un numero`)
            return
        }

        let data = ''
        
        for (let i = 0; i <= limite; i++) {
            data += `${ base } x ${ i } = ${ base * i }\n`
        }
        
        fs.writeFile(`tablas/Tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`Tabla-${ base }.txt`);            
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}


