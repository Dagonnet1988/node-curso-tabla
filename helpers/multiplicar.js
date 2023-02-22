const fs = require('fs');
const colors = require('colors');
colors.enable();


// const crearArchivo = (p = 5) => {

//     return  new Promise ((resolve, reject ) => {
//         console.log('==================');
//         console.log('  TABLA DEL :', p);
//         console.log('==================');
        
//         let salida = '';

//         for (let m = 1; m <= 10; m++) {
//             salida += `${p} X ${m} = ${p*m} \n`;
//         }
//         console.log(salida);

//         fs.writeFileSync(`tabla-${p}.txt`, salida);

//         resolve (`tabla-${p}.txt`)
//         reject ()
//     })
    
// }

const crearArchivo = async ( p = 5, l = false, h= 10) => {
    try {
                
        let salida, consola = '';
        
        for (let m = 1; m <= h; m++) {
            salida += ` ${p} X ${m} = ${p*m}\n`;
            consola += `${p} `.yellow + 'X '.green  +`${m} ` + '= '.red + `${p*m} \n`.blue;
        }if (l === true){
            console.log('=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red);
            console.log('  TABLA '.yellow+' DEL '.blue+' : '.red, p);
            console.log('=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red+'=='.yellow+'='.blue+'='.red);
            console.log(consola);
        }      

        fs.writeFileSync(`./salida/tabla-${p}.txt`, salida);

        return `tabla-${p}.txt`;
            
    } catch (err) {
        throw(err);
    }
    
    
}

module.exports = {
    crearArchivo
}