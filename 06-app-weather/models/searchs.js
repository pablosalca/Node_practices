const fs = require('fs')
const axios = require('axios')
require('dotenv').config()

class Searchs {
    history = []
    path = './db/database.json';
    constructor() {
        this.readDb();
    }

    get historyCapitalize() {
        return this.history.map(city => {
            let words = city.split(' ');
            words = words.map(w => w[0].toUpperCase() + w.substring(1));

            return words.join(' ');
        })
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }
    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }
    async cities(place = '') {
            try {
                // http request
                const instance = axios.create({
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                    params: this.paramsMapbox
                })

                const request = await instance.get();
                return request.data.features.map(place => ({
                    id: place.id,
                    name: place.place_name,
                    lng: place.center[0],
                    lat: place.center[1]
                }));

            } catch (error) {
                // maybe send someting 
                return [];
            }
        }
        // api.openweathermap.org/data/2.5/weather?lat=14.88333&lon=-91.45&appid=3c33ff0c0415e777ce6cd2511ca67d51&units=metric&lang=es
    async weatherPlace(lat, lon) {
        try {
            // axios intance
            const instance = axios.create({
                    baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                    params: {...this.paramsOpenWeather, lat, lon }
                })
                // console.log(instance);
            const request = await instance.get();
            const { weather, main } = request.data; //solucion del curso
            return {
                temp_min: main.temp_min,
                temp_max: main.temp_max,
                desc: weather[0].description,
            }
        } catch (error) {
            console.log(error);
        }
    }

    addHistory(place = '') {

        // Only unique results
        if (this.history.includes(place.toLowerCase())) {
            return;
        }
        this.history.splice(0, 5);
        this.history.unshift(place.toLowerCase());
        // save db
        this.saveDb();
    }

    saveDb() {
        const payload = {
                history: this.history
            }
            // console.log(payload);
        fs.writeFileSync(this.path, JSON.stringify(payload));
    }

    readDb() {
        if (!fs.existsSync(this.path)) {
            return;
        }
        const info = fs.readFileSync(this.path, { encoding: 'UTF-8' })
        const { history } = JSON.parse(info)
        this.history = history


    }
}

module.exports = Searchs;