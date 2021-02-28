const inquirer = require('inquirer');
require('dotenv').config()


const { readInput, inquirerMenu, pause, listPlaces } = require('./helpers/inquirer');
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
                const arg = await readInput("Ciudad: ");

                //search places
                const cities = await searchs.cities(arg);

                // select place
                const selectedId = await listPlaces(cities);

                if (selectedId === '0') continue;

                const { lat, lng, name } = cities.find(p => p.id === selectedId);

                //save in db
                searchs.addHistory(name);
                const { temp_min, temp_max, desc } = await searchs.weatherPlace(lat, lng);
                //weather
                // show results
                console.clear();
                console.log('\n información de la ciudad\n'.green);
                console.log('Ciudad:', name);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Mínima:', temp_max);
                console.log('Maxima:', temp_min);
                console.log('descripción:', desc.green);
            case 2:
                searchs.historyCapitalize.forEach((place, i) => {
                    const idx = `${i=i+1}.`.green
                    console.log(`${idx} ${place}`);
                })

                // searchs.readDb();
                break
        }
        if (opt !== 0) await pause();
    } while (opt !== 0);
}

// console.log(process.env.MAPBOX_KEY);

main();