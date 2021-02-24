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

    async city(place = '') {
        try {
            // http request
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapbox
            })

            // console.log(instance);
            const resp = await instance.get();
            console.log("-****--------------------------------------------------------------------****---");
            console.log(resp.data);
            console.log("-****--------------------------------------------------------------------****---");
            // console.log(resul.data);
            return [];
        } catch (error) {
            // maybe send someting 
            return [];
        }
    }

}

module.exports = Searchs;