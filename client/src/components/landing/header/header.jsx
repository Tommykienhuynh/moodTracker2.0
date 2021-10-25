import React, {useState} from 'react'
import MoodContainer from "../header/moodContainer";

import LogMood from "./logMood";





export default function Header({logs, setLogs}) {
    let moodInputHeight = 20;
    let moodInputWeight = 50;
    let moodPadding = 200;
    let [btnColor, setBtnColor] = useState("#c4c4c4");
    let [popUp, changePopUp] = useState(false);
    const [moodSelect, changeMood] = useState("none");

    

    const showSelect = () => {
        changePopUp(true);
    }

    const handleBTNChange = (color, mood) => {
        if(moodSelect === "none"){
            setBtnColor(color);
        }
        
    }

    const handleMoodSelect = (mood) => {
        changeMood(mood);      
            
    }


    const closePopUp = () => {
    
            changePopUp(false);

    }
    
    

    return (
        <div className="header">
             <button className="signInBTN"> Login/Sign-up </button>
           
            
           <div className="headerContainer">
            <MoodContainer moodPadding={moodPadding}  moodInputWeight={moodInputWeight} handleMoodSelect={handleMoodSelect} handleBTNChange={handleBTNChange} moodSelect={moodSelect} changeMood={changeMood} popUp={true}  />

             <button className={`logMood ${moodSelect}`} onClick={showSelect}   > Log Mood </button>
           </div>

           <div style={{display: `${popUp ? "flex" : "none"}` }} className="logMoodContainer">
               <div onClick={closePopUp} className="xbackGround">
               X
   
               </div>
          
           <LogMood  {...{logs}} setLogs={setLogs} handleBTNChange={handleBTNChange} handleMoodSelect={handleMoodSelect} popUp={false} moodSelect={moodSelect} changeMood={changeMood} btnColor={btnColor} moodInputHeight={moodInputHeight} />

           </div>
         
        </div>
    )
}
