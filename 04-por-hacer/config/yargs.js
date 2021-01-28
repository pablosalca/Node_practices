const opttionsC = {
    description: {
        demand: true,
        alias: 'd',
        desc: "description of TODO"
    },
}
const opttionsU = {
    description: {
        demand: true,
        alias: 'd',
        desc: "description of TODO"
    },
    complete: {
        alias: 'c'
    }
}


const argv = require('yargs')
    .command('generate', "generate new TODO in database.", opttionsC)
    .command('update', "update TODO in database.", opttionsU)
    .command('list', "list TODO in database.")
    .help()
    .argv; // Este argv deve ir siempre al final para poder hacer uso de las propiedades de el array _


module.exports = {
    argv
}