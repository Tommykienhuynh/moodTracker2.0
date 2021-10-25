import React, {useState, useEffect} from 'react';
import "../landing/landing.scss";
import "./dashBoard.scss";


import Toolbar from "../dashboard/toolBar";
import MoodLog from "../landing/header/logMood";
import MoodGraph from "../dashboard/moodGraph";
import ProfileComponent from "./profileCon";
import MoodBars from "../dashboard/moodBars";
import {getAverageMood,  calcPercentageMood, getWeekMood, getMoodPercentArr} from './data';




export default function DashBoard() {

    let moodInputHeight = "100";
    let moodInputWeight = "85";
    let moodPadding = "105";
    let [moodData, setMoodData] = useState([]); 
    let [btnColor, setBtnColor] = useState("#c4c4c4");
    //let [averageMoodNum, setAverageMoodNum] = useState();
    const [moodSelect, changeMood] = useState("none");
    const averageMoodNum =  getAverageMood(moodData);
    const moodPercentArr = getMoodPercentArr(moodData);
    

   
  
    
    

    
    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageLogs = JSON.parse(localStorage.getItem("STORAGE_LOGS"));
        if (storageLogs) {
          setMoodData(storageLogs);
          
        }
        


      }, []);

      useEffect(() => {
        localStorage.setItem('STORAGE_LOGS', JSON.stringify(moodData));
      
    }, [moodData])

    

    
    

    

    const handleBTNChange = (color, mood) => {
        if(moodSelect === "none"){
            setBtnColor(color);
        }
        
    }

    const handleMoodSelect = (mood) => {
        changeMood(mood);      
        
    }


    

    return (
        <div className="dashBoard">
           
            <Toolbar  /> 

            
             <MoodLog moodPadding={moodPadding}
              moodInputWeight={moodInputWeight} 
              moodInputHeight={moodInputHeight} 
              className="dashMoodLog" 
              handleMoodSelect={handleMoodSelect} 
              handleBTNChange={handleBTNChange} 
              moodSelect={moodSelect} 
              changeMood={changeMood}
              logs={moodData}
              setLogs={setMoodData} /> 
            <MoodGraph {...{moodData}} />
            <ProfileComponent
                {...{averageMoodNum, moodData}}
            />
            <MoodBars {...{moodPercentArr}} />

        

 

            
            


        </div>
    )
}
