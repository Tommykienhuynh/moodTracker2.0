import React from 'react'
import "../landing.scss";

import greatFace from "../../../assets/moodGreat.svg";
import goodFace from "../../../assets/moodGood.svg";
import okayFace from "../../../assets/moodOkay.svg";
import sadFace from "../../../assets/moodSad.svg";
import depressedFace from "../../../assets/moodDepressed.svg";

export default function MoodContainer( { handleBTNChange, popUp, handleMoodSelect, moodSelect}) {

    

   

    return (
        <div className={popUp? "moodContainer" : "moodContainer small"} >
             <img  className={moodSelect === "Great" ? "face active" : "face"} onClick={() => handleMoodSelect("Great")} onMouseOver={ () => handleBTNChange("#c8ecad", "Great")} src={greatFace} alt="GreatFace" />
             <img className={moodSelect === "Good" ? "face active" : "face"} onClick={() => handleMoodSelect("Good")} onMouseOver={ () => handleBTNChange("#d8ebe8", "Good")}  src={goodFace} alt="GoodFace" />
             <img className={moodSelect === "Okay" ? "face active" : "face"} onClick={() => handleMoodSelect("Okay")} onMouseOver={ () => handleBTNChange("#fee4bd", "Okay")}  src={okayFace} alt="OkayFace" />
             <img className={moodSelect === "Sad" ? "face active" : "face"} onClick={() => handleMoodSelect("Sad")} onMouseOver={ () => handleBTNChange("#ffc3bd", "Sad")}  src={sadFace}  alt="sadFace"/>
             <img  className={moodSelect === "Depressed" ? "face active" : "face"} onClick={() => handleMoodSelect("Depressed")} onMouseOver={ () => handleBTNChange("#dbd0ec", "Depressed")}  src={depressedFace} alt="depressedFace" />
            
        </div>
    )
}
