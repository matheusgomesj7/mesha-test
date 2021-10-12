const climateUrl = inputCityName => `http://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&APPID=06468f52b64422e315355bf678fdc418&units=metric`;
const shazamUrl = keyword => `https://shazam.p.rapidapi.com/songs/list-recommendations?key=${keyword}&locale=en-US`

export {
    climateUrl,
    shazamUrl
}