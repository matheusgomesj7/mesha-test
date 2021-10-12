import { climateUrl, shazamUrl } from "./urls";

export default {
  getPlaylist: (keyword) => {
    return fetch(shazamUrl(keyword), {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "66798d8ddemshf82b9fe6b53c376p1e2176jsn0910d6025035"
      }
    })
    .then(response => {
      return response.json().then((value) => {
        return value
      })
    })
    .catch(err => {
      console.error(err);
    });
  },
  getClimate: inputCityName => {
    return fetch(climateUrl(inputCityName)).then(response => {
      return response.json().then((value) => {
        return value 
    })  
  }).catch(err => {
    console.error(err);
  })}
}