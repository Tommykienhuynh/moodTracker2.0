import React, {useState, useEffect} from 'react'
import MoodContainer from "../header/moodContainer";
/* import { createBrowserHistory } from 'history'; */
import { useHistory } from 'react-router';
/* import { useHistory } from 'react-router'; */




export default function LogMood({ setLogs, moodPadding, handleBTNChange, handleMoodSelect, moodSelect, changeMood, moodInputWeight, moodInputHeight, logs}) {
        const history = useHistory();
    // const [logs, setLogs] = useState([]);
        
      // const theLogs = [logs]; 

      
        const [desc, setDesc] = useState("");
      
    
        /* let STORAGE_LOGS;
       
        

        useEffect(() => {
                // fires when app component mounts to the DOM
                const storageLogs = JSON.parse(localStorage.getItem(STORAGE_LOGS));
                if (storageLogs) {
                  setLogs(storageLogs);
                  
                }

               
                
                //checkOverDue();


              }, []);

*/
     


        

        //Generate random ID
        function makeid(length) {
                var result = "";
                var characters =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
              }
        


        const containerStyle ={
                height: `${moodInputHeight}% `,
                 width: `${moodInputWeight}%`
                
        };


        const handlechange = (e) => {
    setDesc(e.target.value);
        }

        function toDashboard() {
                history.push('./dash');
        }

        const  handlesubmit =  (e) => {

                e.preventDefault();
              
               setLogs([...logs, 
                        {_id: makeid(20),
                        date: new Date(Date.now()).toUTCString(),
                        logDescription: desc,
                        mood: moodSelect  
                        }
                ]);
              

                setDesc("");

                toDashboard();

                
             
             
               
                
              
            
        }

        
        return (


       
            <div className="logMoodWrapper shadow" style={containerStyle}>
            <form onSubmit={handlesubmit}>   
            <input required onChange={handlechange} value={desc}   className="logMoodInput shadow" style={{paddingBottom: `${moodPadding}px`}} type="text" name="name" placeholder="How are you Feeling?"/>

                    <div className="flexWrapper">
                    <MoodContainer handleMoodSelect={handleMoodSelect} className="moodContainer small" moodSelect={moodSelect} changeMood={changeMood} handleBTNChange={handleBTNChange}  />
                    <button type="submit" className={`logMood ${moodSelect}`}  > Confirm </button>

                    </div>
             


             </form>

                 
                
         
            </div>
  
    )
}
