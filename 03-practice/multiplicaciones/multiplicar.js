// requireds
// const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');



let listTable = (base, limit = 10) => {
    console.log("====================".green);
    console.log(`==tabla de ${base}==`.blue);
    console.log("====================".green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`)
    }

}

//Alternate //module.exports.createFile = (base) => {
let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("el valor introducido no es un numero ");
            return;
        }
        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        })

    })
}


module.exports = {
    // createFile: createFile before
    createFile, //Now ems7
    listTable

}