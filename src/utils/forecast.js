const request = require('request');

function forecast(longitude, latitude, callback) {

    const url = `http://api.weatherstack.com/current?access_key=14757ea02d68d7bfc3efd2602c0ea55c&query=${latitude},${longitude}&units=f`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `It is currently ${body.current.weather_descriptions[0]}. The temp is ${body.current.temperature}. It feels like ${body.current.feelslike}.`);
        }
    })

}

module.exports = forecast;