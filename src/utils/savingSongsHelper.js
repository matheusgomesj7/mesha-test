function savingSongsHelper(data) {
    const today = new Date();
    const date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`;
    const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const infosId = date.replaceAll('/', '') + hour.replaceAll(':', '');
    const localData = {
        recommendations: data.recommendations,
        playlistGenre: data.playlistGenre,
        cityTemperature: data.cityTemperature,
        inputCityName: data.inputCityName,
        date,
        hour
    }
    const localDataSerialized = JSON.stringify(localData);
    localStorage.setItem(`${infosId}`, localDataSerialized);
  }
  export default savingSongsHelper