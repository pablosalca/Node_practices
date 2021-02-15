const fs = require('fs');
const colors = require('colors')

const generateFile = async(base = 1, list = false, until = 10) => {

    try {

        let output = '',
            consoleOutput = '';


        for (let i = 1; i <= until; i++) {
            consoleOutput += `${colors.yellow(base)} ${'x'.red} ${colors.yellow(i)} = ${colors.green(base*i)}\n`;
            output += `${base} x ${i} = ${base*i}\n`;
        }

        if (list) {
            console.log("===========================".red)
            console.log(`Tabla de multiplicar del ${base} hasta el ${colors.red(until)}\t `.green);
            console.log("===========================".red)
            console.log(consoleOutput);
        }

        fs.writeFileSync(`multiplication_tables/tableOf${base}.txt`, output)
        return `table of ${base}.txt`

    } catch (e) {
        throw e;
    }



}

module.exports = {
    generateFile
}