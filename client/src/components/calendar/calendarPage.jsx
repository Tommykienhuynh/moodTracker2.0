import React, {useState, useEffect} from 'react'
import Calendar from "./calendar";
import ToolBar from '../dashboard/toolBar';
import "./calendar.scss";




export default function CalendarPage() {

    let [moodData, setMoodData] = useState([]); 

    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageLogs = JSON.parse(localStorage.getItem("STORAGE_LOGS"));
        if (storageLogs) {
          setMoodData(storageLogs);
          
        }
        


      }, []);


    

    return (
        <div className="calendarPage">

            <ToolBar  className="toolbar" />
          {/*   <Calendar className="calendar" /* data={data} */ /> */}
            
        </div>
    )
}
