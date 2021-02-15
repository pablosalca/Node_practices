const argv = require('yargs')
    .options({
        'base': {
            alias: 'b',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'

        },
        'list': {
            alias: 'l',
            type: 'boolean',
            demandOption: false,
            describe: 'Lista la tabla de multiplicar y la genera'
        },
        'until': {
            alias: 'u',
            type: 'number',
            demandOption: false,
            describe: 'Especifica hasta donde llegara la tabla '
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base no es tipo numero'
        }
        return true
    })
    .argv

module.exports = argv;