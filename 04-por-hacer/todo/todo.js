// const { require } = require("yargs");

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let listToDo = [];

let saveDb = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Dont cant save', err)
    })
}

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const generate = (description) => {
    loadDB();

    let toDo = {
        // description: description equivalent.
        description,
        complete: false
    };
    listToDo.push(toDo);
    saveDb();
    return toDo
}

const getList = () => {
    loadDB();
    return listToDo;

}

const update = (description, complete = true) => {
    loadDB();
    let index = listToDo.findIndex(homeWork => homeWork.description === description);
    console.log(listToDo[index].description);
    if (index >= 0) {
        listToDo[index].complete = true
        return true
    } else {
        return false;
    }
}
module.exports = {
    generate,
    update,
    getList
}