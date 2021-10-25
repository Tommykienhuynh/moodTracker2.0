import React, {useState, useEffect} from 'react'
import  "./landing.scss";

import Header from "./header/header.jsx";
import Carousel from "./carousel/carousel";



export default function Landing() {

    const [logs, setLogs] = useState([]);
    console.log(setLogs);
  
    //let STORAGE_LOGS;
 

    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageLogs = JSON.parse(localStorage.getItem("STORAGE_LOGS"));
        if (storageLogs) {
          setLogs(storageLogs);
          
        }


      }, []);


    useEffect(() => {
        localStorage.setItem('STORAGE_LOGS', JSON.stringify(logs));
      
    }, [logs])

    



    return (
        <div className="landing">
            
            <Header {...{logs} } setLogs={setLogs}  />
        
            <div className="about">

                <div className="aboutInfo">
                <h1> How does This Work </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  </p>
                </div>

                <Carousel />
               
                    
            </div>

                
            


        
        </div>
    )
}
