const request = require('request')

const forecast = (address, callback) => {

    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + address + '&units=metric&appid=60172738777d6796410c2a59ed77b2a8'

    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod === "404") {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.city.name,'Currently there is '+ body.list[0].weather[0].description+ '. It is currently ' + body.list[0].main.temp + ' degrees celcius out. Humidity is '+ body.list[0].main.humidity + '%')
        }
    })
        
}

module.exports = forecast


 