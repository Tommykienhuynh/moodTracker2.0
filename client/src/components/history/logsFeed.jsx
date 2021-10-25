import React from 'react'
import Log from "./log";

export default function logsFeed({moodData}) {
    console.log(moodData);
    let mood = "Okay";
    return (
        <div className="logsFeed">
            {moodData.map((el) => {
                
              return   <Log date={el.date} desc={el.logDescription} mood={el.mood} key={el._id} /> 
            })}
            
            
        </div>
    )
}
