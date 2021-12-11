import React, {useState} from 'react'
import { useHistory } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile , faCalendar, faHeartbeat , faRedo, faSignOutAlt, faChartBar} from '@fortawesome/free-solid-svg-icons';



export default function ToolBar() {

    const [page, setPage] = useState('dash');
    let history = useHistory(); 
    const toHistory = () => {
        
        history.push('./history');
        setPage('history');
}
    const toDashboard = () => {
        
        history.push('./dash');
        setPage('dash');
       
    }


    return (
        <div className="toolBar"> 
               <div className="logoContainer">
                  <FontAwesomeIcon className="fa " icon={faSmile} />
               </div>
               
               <div className="topLogoContainer">
                <div className="div">
                    
                </div>
               <FontAwesomeIcon title="Dashboard" className={page === "dash" ? "fai active" : "fai"} onClick={toDashboard} icon={faChartBar} />
            
               <FontAwesomeIcon title="Coming Soon" className="fai cal "  icon={faCalendar}  />
               <FontAwesomeIcon title="History"className={page === "history" ? "fai active" : "fai"}  icon={faRedo} onClick={toHistory} />
               <FontAwesomeIcon title="Coming Soon" className="fai cal"  icon={faHeartbeat} />
               </div>
              
               <FontAwesomeIcon title="Coming Soon" className="fai faSignOut cal" icon={faSignOutAlt} />
             
        </div>
    )
}
