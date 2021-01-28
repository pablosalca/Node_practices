const opttionsC = {
    description: {
        demand: true,
        alias: 'd',
        desc: "description of to do"
    },
}
const opttionsU = {
    description: {
        demand: true,
        alias: 'd',
        desc: "description of to do"
    },
    complete: {
        alias: 'c'
    }
}


const argv = require('yargs')
    .command('generate', "generate new to do in database.", opttionsC)
    .command('update', "update to do in database.", opttionsU)
    .command('list', "list to do in database.")
    .help()
    .argv; // Este argv deve ir siempre al final para poder hacer uso de las propiedades de el array _ -> investigar esta convencion


module.exports = {
    argv
}