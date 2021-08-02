import React, {useEffect } from "react";
import CompletedLogItem from './CompletedLogItem'
import PreLoader from '../layout/PreLoader'
import  {connect} from 'react-redux'
import {getCompletedLogs} from '../../redux/actions/logActions'

const CompletedLogs = ({log:{completedlogs,loading},getCompletedLogs}) => {

 
  useEffect(() => {
    getCompletedLogs();
  }, []);

  

  if (loading || completedlogs ===null){
    return <PreLoader/>;
  }

  return (
    <ul className="collection with-header" style={{display:'grid',top:'30px',width:450,margin:'auto'}}>
    <li className="collection-header">
      <h4 className="center">Completed logs</h4>
       
    </li>
       {!loading && completedlogs.length === 0 ? <p className="center">No logs to show..</p>
       :
       completedlogs.map( log => (
          
        <CompletedLogItem key={log.id} log={log}/>
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
  getCompletedLogs
})(CompletedLogs);
