
import './App.css';
import React , {useEffect , Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import {Provider} from 'react-redux';
import store from './redux/store'
import Home from './pages/Home'

import Techs from './pages/Techs'
import CompletedLogs from './pages/CompletedLogs'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

  

  useEffect(() => {
    
    //Init Materialize JS
    M.AutoInit();
  
    
  },[])






  return (
 <Router>
    <Provider store={store}>
    <Fragment>
    
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/techs' component={Techs}/>
      <Route exact path='/completedlogs' component={CompletedLogs}/>
    </Switch>
      
    </Fragment>
    </Provider>
  </Router>
    
  )
}

export default App
