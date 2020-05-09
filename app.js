const geoCode = require("./utils/geocode");
const getWeather = require("./utils/getweather");
const location = process.argv[2];

// geoCode(location).then(({
//     Latitude,
//     Longitude,
//     Location
// }) => {
//     return getWeather(Latitude, Longitude, Location)
// }).then(({
//     message,
//     location
// }) => {
//     console.log("The Location is ", location)
//     console.log(message);
// }).catch((error) => {
//     console.log("Error", error);
// })


async function getWeatherDetails(loc) {
    debugger
    if (!loc) {
        console.log("Please enter a address")
    } else {
        try {
            const { Latitude,Longitude,Location } = await geoCode(loc);
            const message = await getWeather(Latitude, Longitude);
            console.log("Location is ",Location);
            console.log(message);
        } catch (e) {
            console.error(e)
        }
    }
}

getWeatherDetails(location);