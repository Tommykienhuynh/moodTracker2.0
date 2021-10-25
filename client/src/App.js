
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
/* import { createBrowserHistory } from 'history'; */

import DashBoard from './components/dashboard/dashBoard.jsx';
import Landing from "./components/landing/landing.jsx";
import History from "./components/history/history.jsx";
import './style.scss';







function App() {

/*   let history = createBrowserHistory({forceRefresh:true}); */

  
  return (
    <Router >
        <Switch > 
            <Route path="/" exact component={Landing} />
            <Route path="/dash" exact component={DashBoard} />
            <Route path="/history" exact component={History} />
            
          </Switch>
     
    
    </Router>
  );
}

export default App;
