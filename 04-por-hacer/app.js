// const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./todo/todo');
// console.log(argv);

let command = argv._[0];

switch (command) {
    case "generate":
        let homeWork = toDo.generate(argv.description)
        break;
    case "list":
        let list = toDo.getList();
        for (let homeWork of list) {
            console.log(colors.green('======= por hacer ======='));
            console.log(homeWork.description);
            console.log("Estado: ", homeWork.complete);
            console.log(colors.green('====================='));
        }
        break
    case "update":
        let update = toDo.update(argv.description, argv.update);
        console.log(update);
        break
    default:
        console.log("Command not recnogize ");
}