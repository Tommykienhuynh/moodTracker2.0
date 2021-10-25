import React from 'react'
import { useHistory } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile , faCalendar, faHeartbeat , faRedo, faSignOutAlt, faChartBar} from '@fortawesome/free-solid-svg-icons';



export default function ToolBar() {

    let history = useHistory();
    const toHistory = () => {
        history.push('./history');
}


    return (
        <div className="toolBar"> 
               <div className="logoContainer">
                  <FontAwesomeIcon className="fa " icon={faSmile} />
               </div>
               
               <div className="topLogoContainer">
                <div className="div">
                    
                </div>
               <FontAwesomeIcon title="Dashboard" className="fai active " icon={faChartBar} />
            
               <FontAwesomeIcon title="Calender" className="fai "  icon={faCalendar} />
               <FontAwesomeIcon title="History" className="fai "  icon={faRedo} onClick={toHistory} />
               <FontAwesomeIcon title="Mental Health Page" className="fai "  icon={faHeartbeat} />
               </div>
              
               <FontAwesomeIcon title="Sign Out" className="fai faSignOut" icon={faSignOutAlt} />
             
        </div>
    )
}
