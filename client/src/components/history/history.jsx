import React,{useEffect, useState} from 'react'
import "./history.scss";

import Toolbar from "../dashboard/toolBar";
import LogFeed from "./logsFeed";
import HistorySVG from "../../assets/historyImg.svg";

export default function History() {
    let [moodData, setMoodData] = useState([]); 


    //On page mount get data from local storage
    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageLogs = JSON.parse(localStorage.getItem("STORAGE_LOGS"));
        if (storageLogs) {
          setMoodData(storageLogs);
          
        }
        


      }, []);

    return (
        <div className="historyPage">
             <Toolbar className="toolBar" />

      <img src={HistorySVG} className="historySVG" />

             <div className="logsContainer">
                 <h1> Mood Logs </h1>
                
                 <LogFeed {...{moodData}} className="logFeed" />

             </div>

        </div>
        )
}
