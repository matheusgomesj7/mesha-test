import React, { useState } from 'react';
import ManagingButtons from '../components/ManagingButtons';
import api from '../api/api';
import { MUSIC_GENRES, PLAYLISTS_URL_KEYS } from '../utils/constants'
import '../App.css';

function MainPage() {

    const [inputCityName, setInputCityName] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [playlistGenre, setPlaylistGenre] = useState('');
    const [cityTemperature, setCityTemperature] = useState('');

    function handlePlaylists(genre, keyword) {
      api.getPlaylist(keyword).then(value => {
        const tracks = value.tracks.map((track) => ({
          songName: track.title,
          artistName: track.subtitle,
          songKey: track.key
        }))
        setRecommendations([...tracks])
        setPlaylistGenre(genre)
      })
    }
                           
    function handleSubmitCityName(event) {
      event.preventDefault();
      if (inputCityName.length !== 0) {
            api.getClimate(inputCityName).then(value => {
              const temperature = Math.round(value.main.temp);
              setCityTemperature(temperature);
              if (temperature >= 32) {
                  handlePlaylists(MUSIC_GENRES.ROCK_GENRE, PLAYLISTS_URL_KEYS.ROCK_URL_KEY)
              } else if (temperature < 32 && temperature >= 24) {
                handlePlaylists(MUSIC_GENRES.POP_GENRE, PLAYLISTS_URL_KEYS.POP_URL_KEY)
              } else if (temperature < 24 && temperature >= 16) {
                handlePlaylists(MUSIC_GENRES.CLASSIC_GENRE, PLAYLISTS_URL_KEYS.CLASSIC_URL_KEY)
              } else {
                handlePlaylists(MUSIC_GENRES.LOFI_GENRE, PLAYLISTS_URL_KEYS.LOFI_URL_KEY)
              }
            });
      } else {
        alert('Empty input, type a city name.')
      }
    }

    const handleClearLists = () => { 
      localStorage.clear()
      setRecommendations([])
    }
    
    return (
      <>
        <main className="main">
            <header>
              <h1 className="centering">What are the best songs to listen to today?</h1>
            </header>
            <form className="form-city centering">
              <input
                className="form-city__input"
                placeholder="Insert city here"
                value={inputCityName}
                onChange={e => setInputCityName(e.target.value)}
              />
              <button className="button__state-send" onClick={handleSubmitCityName}>
                Send
              </button>
            </form>
            <ManagingButtons 
              recommendationList={recommendations} 
              localData={{
                playlistGenre,
                cityTemperature,
                recommendations,
                inputCityName
              }} 
              handleClearLists={handleClearLists} 
            />
        </main>
      </>
    );
  }
  
  export default MainPage;