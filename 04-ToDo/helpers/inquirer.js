require('colors');
const inquirer = require('inquirer');
const Homework = require('../models/homework');


const menuOpts = [

    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [{
                value: '1',
                name: `${'1.'.green} Crear tarea`

            },
            {
                value: '2',
                name: `${'2.'.green} Listar tarea`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar Tareas`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
            new inquirer.Separator()

        ]
    }

];

const inquirerMenu = async() => {
    console.clear()
    console.log("=================================".green);
    console.log("Seleccione una opcion".white);
    console.log("=================================\n".green);

    const { option } = await inquirer.prompt(menuOpts)

    return option;
}


const pause = async() => {
    const confirm = [

        {
            type: 'confirm',
            name: 'confirmation',
            message: `Presione ${"Enter".green} para continuar`,
            default: true
        }

    ]
    console.log('\n')
    await inquirer.prompt(confirm);
}

const readInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return "ingrese un valor!";
            }
            return true;
        }
    }]

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const deleteObjectFromList = async(list = []) => {

    const choices = list.map((homework, i) => {
        const idx = `${i+1}.`.green
        return {
            value: homework.id,
            name: `${idx} ${homework.desc}`
        }
    })
    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'
    });

    const question = [{
        type: 'list',
        name: 'id',
        message: 'Elija la opcion a borrar',
        choices: choices
    }]

    const { id } = await inquirer.prompt(question);
    return id;
}

const confirm = async(message = '') => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message,
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}


const showHomeworksChekList = async(list = []) => {

    const choices = list.map((homework, i) => {
        const idx = `${i+1}.`.green
        return {
            value: homework.id,
            name: `${idx} ${homework.desc}`,
            checked: (homework.complete) ? true : false
        }
    })


    const question = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices: choices
    }]

    const { ids } = await inquirer.prompt(question);
    return ids;
}



module.exports = {
    inquirerMenu,
    pause,
    readInput,
    deleteObjectFromList,
    confirm,
    showHomeworksChekList
}