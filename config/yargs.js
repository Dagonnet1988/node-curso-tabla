const argv = require('yargs')
        .option('b', {
            alias: 'p',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la multiplicacion'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicar'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta que numero multiplicar'
        })
        .check ((argv, options) => {
            if ( isNaN(argv.b)){
                throw 'La base debe ser un Numero'
            }
            return true;
        })
        .argv;
module.exports = argv;