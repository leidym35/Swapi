const request = require('request');
require('dotenv');

_url = 'https://swapi.dev/api/starships/'

const starshipsList = (callback) => {
    request(_url, { json: true }, (err, res, body) => {
        if (err) {
            return callback(err);
        }
        else {
            for (let i in body) {
                var data = body[i]
            }
            const values = []
            for (let j = 0; j < data.length; j++) {
                values.push({
                    "name": data[j].name,
                    "model": data[j].model,
                    "manufacturer": data[j].manufacturer,
                    "passengers": data[j].passengers,
                })
            }
            console.log(values)
        }

    })
}
starshipsList();  