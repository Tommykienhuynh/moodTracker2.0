import React, {useState} from 'react'


import greatFace from "../../assets/moodGreat.svg";
import goodFace from "../../assets/moodGood.svg";
import okayFace from "../../assets/moodOkay.svg";
import sadFace from "../../assets/moodSad.svg";
import depressedFace from "../../assets/moodDepressed.svg";


export default function ProfileCon({moodData, averageMoodNum})


{

    let averageMoodFace = "";
    //console.log(averageMoodNum);

   
        if (averageMoodNum <= 1 && averageMoodNum >= 0)  averageMoodFace = "depressed"
        else if (averageMoodNum <= 2 && averageMoodNum >= 1) averageMoodFace = "sad";
        else if (averageMoodNum <= 3 && averageMoodNum >= 2) averageMoodFace = "okay";
        else if(averageMoodNum <= 4 && averageMoodNum >= 3) averageMoodFace = "good";
        else if (averageMoodNum <= 5 && averageMoodNum >= 4) averageMoodFace = "great";
        
    /* if(averageMoodNum >= 1){
        console.log(averageMoodNum);
    } */

   //console.log(averageMoodFace);


    return (
        <div className="profileContainer shadow">

            <div className="profilePic">
                
            </div>

            <h3 className="profileName"> Tommy Huynh </h3>

            <div className="profileStatContainer">
                <span> Average Mood </span>
            
             {averageMoodFace === "great" ? <img src={greatFace} className="profileMoodTrack" /> : "" }
             {averageMoodFace === "good" ? <img src={goodFace} className="profileMoodTrack" /> : "" }
             {averageMoodFace === "okay" ? <img src={okayFace} className="profileMoodTrack" /> : "" }
             {averageMoodFace === "sad" ? <img src={sadFace} className="profileMoodTrack" /> : "" }
             {averageMoodFace === "depressed" ? <img src={depressedFace} className="profileMoodTrack" /> : "" }
          
            </div>

            <div className="profileStatContainer">
                <span className="logTitle"> Logs </span>
                   <small className="logCounter"> {moodData.length} </small>
            </div>
            
         
            
        </div>
    )
}
