import React, { useState, useEffect } from 'react';
import '../App.css';

function SavedLists() {

    const [lists, setLists] = useState([])

    useEffect(() => {
        const items = { ...localStorage };
        let listsArr = []
        for (let key in items) {
           let songsListDeserialized = JSON.parse(items[key])
           listsArr.push(songsListDeserialized)
        }
        setLists(listsArr)
    }, [])

    function handleClearPlaylists() {
        localStorage.clear()
        setLists([])
    }

    return (
        <>
            {
                localStorage.length !== 0 ? (
                    lists.map((item) => (
                        <div>
                            <div className="centering">
                                <p>You searched for {item.inputCityName}'s temperature, which was {item.cityTemperature}ºC.</p>
                                <p>On {item.date} at {item.hour}</p>
                                <p>The recommended {item.playlistGenre} songs were:</p>
                                <p>{item.recommendations[0].songName} by {item.recommendations[0].artistName}</p>
                            </div>
                            <hr />
                        </div>
                    ))
                ) : null
            }
            {
                localStorage.length !== 0 ? (
                    <button
                    className="button__state-delete"
                    onClick={handleClearPlaylists}
                    >Delete lists
                    </button>
                ) : null
            }
        </>
    )
}

export default SavedLists;