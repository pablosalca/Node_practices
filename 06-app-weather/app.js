const inquirer = require('inquirer');
require('dotenv').config()


const { readInput, inquirerMenu, pause } = require('./helpers/inquirer');
const Searchs = require('./models/searchs');

const main = async() => {
    // const text = await readInput("HOLA A TODOS")
    const searchs = new Searchs();

    let opt = '';
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:

                //show messages
                const place = await readInput("Ciudad: ");
                searchs.city(place);
                //search places
                // select place
                //weather
                // show results

                console.log('\n información de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Mínima:', );

            case 2:
                break
        }
        if (opt !== 0) await pause();
    } while (opt !== 0);

}

// console.log(process.env);

main();