const request = require('request');
require('dotenv');

_url = 'https://swapi.dev/api/planets/'

const planetsList = (callback) => {
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
                    "terrain": data[j].terrain,
                    "gravity": data[j].gravity,
                    "diameter": data[j].diameter,
                    "population": data[j].population

                })
            }
            console.log(values)
        }
    })
}

planetsList()