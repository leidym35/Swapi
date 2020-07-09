const request = require('request');

_url = 'https://swapi.dev/api/films'

const filmsList = (callback) => {
    request(_url, { json: true }, (err, res, body) => {
        if (err) {
            return callback(err);
        }
        else {

            for (const i in body) {
                var data = body[i]
            }
            const values = []

            for (let j = 0; j < data.length; j++) {
                values.push({ "title": data[j].title })
            }
            console.log(values)
            return values

        }
    })
}

filmsList();
