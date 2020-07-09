const request = require('request');

_url = 'https://swapi.dev/api/people/'

const peoplesList = (callback) => {
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
                    "gender": data[j].gender,
                    "hair_color": data[j].hair_color,
                    "skin_color": data[j].skin_color,
                    "eye_color": data[j].eye_color,
                    "height": data[j].height,
                    "homeworld": data[j].homeworld
                })
            }
            console.log(values)
            return values
        }

    })
}

peoplesList(); 