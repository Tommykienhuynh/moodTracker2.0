import React from 'react'

import greatFace from "../../assets/moodGreat.svg";
import goodFace from "../../assets/moodGood.svg";
import okayFace from "../../assets/moodOkay.svg";
import sadFace from "../../assets/moodSad.svg";
import depressedFace from "../../assets/moodDepressed.svg";

export default function log({mood, desc, date}) {

 
    return (
        <div className={`logContainer ${mood} shadow2`}>
            
            

            <div className={`logFaceContainer ${mood}`}>
                {mood === "Great" ? <img src={greatFace} className="logImg " /> : "" }
                {mood === "Good" ? <img src={goodFace} className="logImg " /> : "" }
                {mood === "Okay" ? <img src={okayFace} className="logImg " /> : "" }
                {mood === "Sad" ? <img src={sadFace} className="logImg " /> : "" }
                {mood === "Depressed" ? <img src={depressedFace} className="logImg " /> : "" }
            </div>

            <p> {desc} </p>


            <small className="logDate"> {date} </small>
        </div>
    )
}
