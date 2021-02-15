const { generateFile } = require('./helpers/multiplication')
const argv = require('./config/yargs')

console.clear()

generateFile(argv.b, argv.list, argv.until) //argv.base, argv.l
    .then(fileName => console.log(fileName, 'created'))
    .catch(e => console.log(e));