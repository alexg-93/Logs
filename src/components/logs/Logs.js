import React, { useState, useEffect } from "react";
import LogItem from './LogItem'
import PreLoader from '../layout/PreLoader'
import  {connect} from 'react-redux'
import {getLogs} from '../../redux/actions/logActions'

const Logs = ({log:{logs,loading},getLogs}) => {


 
  useEffect(() => {
    getLogs();
  }, []);


  if (loading || logs ===null){
    return <PreLoader/>;
  }

  return (
    <ul className="collection with-header" style={{display:'grid',marginTop:'7px',maxWidth:500,margin:'auto'}}>
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
       {!loading && logs.length === 0 ? <p className="center">No logs to show..</p>
       :
       logs.map( log => (
          
        <LogItem key={log.id} log={log}/>
       )
        
       
       )

       }
    </ul>
  );
};


const mapStateToProps = state =>({
  log: state.log,
})

export default connect(mapStateToProps,{
  getLogs
})(Logs);
