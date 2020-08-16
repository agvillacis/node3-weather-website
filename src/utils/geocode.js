const request = require('request');

function geocode(address, callback) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWd2aWxsYWNpcyIsImEiOiJja2N4czY2cXIwMnpwMnFxcnA4dDc3czdlIn0.lWJkYeNIgQG9-y1NiFR43w&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined) //undefined is there by default if second param is left empty so not needed
        }
        else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }


    })
}

module.exports = geocode;