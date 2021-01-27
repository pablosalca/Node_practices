// requireds
//node requireds
// const fs = require('fs');
//third party requireds
// const fs = require('express');
//my party requireds

// const createfile = require('./multiplicaciones/multiplicar');
const { createFile, listTable } = require('./multiplicaciones/multiplicar');
const colors = require('colors/safe');
// destructuracion const {cf}
const argv = require('./config/yargs').argv;

// el simbolo _ es un array que contiene todos los camando que no lleven un par de valores mas 
//informacion como node app crear generar otro(este en consola) y aca en el archivo clg(argv)
let comamnd = argv._[0];

switch (comamnd) {
    case "list":
        listTable(argv.base, argv.limit)
        break;
    case "generate":
        createFile(argv.base, argv.limit)
            .then((file) => console.log(` Archivo creado:`, colors.green(file)))
            .catch(err => console.log(err));
        break;
    default:
        console.log("comando no reconocido");
}