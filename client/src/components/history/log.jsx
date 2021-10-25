import React from 'react'

import greatFace from "../../assets/moodGreat.svg";

export default function log({mood}) {
    return (
        <div className="logContainer">
            
            

            <div className={`logFaceContainer ${mood}`}>
                {mood === "Great" ? <img src={greatFace} className="logImg" /> : "" }
            </div>

            <p> Omg this was such a good weekend. I felt great </p>


            <small> November, 3rd 2019 </small>
        </div>
    )
}
