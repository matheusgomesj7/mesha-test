import React from 'react';
import '../App.css';
import savingSongsHelper from '../utils/savingSongsHelper';

function ManagingButtons(props) {
    return (
        <>
            {
                props.recommendationList.length !== 0 ? (
                    <section>
                    <ul>
                        {props.recommendationList.map((songTrack) => (
                        <li key={songTrack.songKey}>Song name: {songTrack.songName}. Artist: {songTrack.artistName}</li>
                        ))}
                    </ul>
                    <section>
                        <button
                        className="button__state-save"
                        onClick={() => savingSongsHelper(props.localData)}
                        >Save songs here!
                        </button>
                        <button
                        className="button__state-delete"
                        onClick={props.handleClearLists}
                        >Delete list
                        </button>
                    </section>
                    </section>
                ) : null
            }
        </>
    )

}

export default ManagingButtons;