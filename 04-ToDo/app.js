require('colors');
const { inquirerMenu, pause, readInput, deleteObjectFromList, confirm, showHomeworksChekList } = require('./helpers/inquirer');
const { saveData, readData } = require('./helpers/handleFile');
const Homeworks = require('./models/homeworks');



const main = async() => {
    let opt = ''
    const homeworks = new Homeworks()

    const readD = readData();
    if (readData) {
        homeworks.loadHomeworksFromArray(readD);
    }

    do {

        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await readInput("Descripcion: ")
                homeworks.generateHomework(desc)
                break
            case '2':
                homeworks.fullHomeworklist();
                break
            case '3':
                homeworks.fullCompleteList(true);
                break
            case '4':
                homeworks.fullCompleteList(false);
                break
            case '5':
                const ids = await showHomeworksChekList(homeworks.listObjArr);
                homeworks.toggleHomeworkCompletes(ids);
                break
            case '6':
                const id = await deleteObjectFromList(homeworks.listObjArr)
                if (id !== '0') {

                    const ok = await confirm("desea Borrarlo?");
                    if (ok) {
                        homeworks.deleteHomework(id);
                    }
                    console.log('tarea borrada');
                }
                break
        }

        await pause();
        saveData(homeworks.listObjArr)

    }
    while (opt !== '0');
}



main();