import React from 'react'
import Log from "./log";

export default function logsFeed({moodData}) {

    let mood = "Great";
    return (
        <div className="logsFeed">
            moodData.map()
            <Log mood={mood} /> 
        </div>
    )
}
