const axios = require('axios')
require('dotenv').config()

class Searchs {

    constructor() {
        // TODO: read db if exists
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

            // console.log(instance);
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

            const request = await instance.get();
            const { weather, main } = request.data; //solucion del curso
            // const description = request.data.weather.map(info => info.description); mi solucion
            // return {
            //     temp_min: request.data.main.temp_min,
            //     temp_max: request.data.main.temp_max,
            //     desc: description[0]
            // }

            return {
                temp_min: main.temp_min,
                temp_max: main.temp_max,
                desc: weather[0].description,
            }




        } catch (error) {
            console.log(error);

        }
    }

}

module.exports = Searchs;