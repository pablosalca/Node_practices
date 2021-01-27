const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', "print values with limit in custom value", options)
    .command('generate', "generate file multiplication table with custom limit.", options)
    .help()
    .argv;


module.exports = {
    argv
}