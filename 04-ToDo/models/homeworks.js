/**
 * _myList
 * {uuid-234234-234234: {id=12, desc:asd, completadoEn:87987E}},
 * {uuid-234234-234234: {id=12, desc:asd, completadoEn:87987E}},
 * {uuid-234234-234234: {id=12, desc:asd, completadoEn:87987E}},
 * {uuid-234234-234234: {id=12, desc:asd, completadoEn:87987E}},
 * 
 */

const Homework = require('./homework');

const colors = require('colors')
class Homeworks {


    get listObjArr() {
        const list = []
        Object.keys(this._myList).forEach(element => list.push(this._myList[element]));
        return list
    }

    constructor() {
        this._myList = {}
    }

    deleteHomework(id = '') {
        if (this._myList[id]) {
            delete this._myList[id]
        }
    }

    generateHomework(desc = '') {
        const homework = new Homework(desc);
        this._myList[homework.id] = homework;
    }

    loadHomeworksFromArray(list = []) {
        list.forEach(element => this._myList[element.id] = element)
    }

    fullHomeworklist() {
        this.listObjArr.forEach((homework, i) => {
            const idx = `${i+1}`.green;
            const { desc, complete } = homework;
            const state = (complete) ?
                'Completada'.green :
                'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${state}`);
        });

    }


    fullCompleteList(completes = true) {
        let i = 0;
        this.listObjArr.forEach((homework) => {
            const { desc, complete } = homework;
            if (completes) {
                i += 1;
                if (complete) console.log(`${i.toString().green} ${desc} :: ${complete.green}`);

            } else {
                i += 1;
                if (!complete) console.log(`${i.toString().green} ${desc} :: ${'Pendientes'.red}`);
            }

        })
    }

    toggleHomeworkCompletes(ids = []) {
        ids.forEach(id => {
            const homework = this._myList[id];
            if (!homework.complete) {
                homework.complete = new Date().toISOString()
            }
        });

        this.listObjArr.forEach(homework => {
            if (!ids.includes(homework.id)) {
                this._myList[homework.id].complete = null;

            }
        })


    }

}

module.exports = Homeworks;