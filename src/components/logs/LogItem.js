import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {deleteLog} from '../../redux/actions/logActions'
import {setCurrentLog} from '../../redux/actions/logActions'
import {addCompletedLog} from '../../redux/actions/logActions'
import { v4 as uuidv4 } from 'uuid';

import M from 'materialize-css/dist/js/materialize'


const LogItem = ({log,deleteLog,setCurrentLog,addCompletedLog}) => {

    const {id,message,tech,date} = log
   
   
    const handleDelete=()=>{
        deleteLog(id)
        M.toast({html:`Log Deleted`})
    }


    const handleCurrentLog=()=>{
        setCurrentLog(log)
    }

    const handleCompletedLog=()=>{
       
        // setCurrentLog(log)
        // addCompletedLog(completedLog)

        let completedLog={id:id,message:message,tech:tech,date:new Date()}
        //add the log to completed logs
        addCompletedLog(completedLog)
        //delete checked log
         deleteLog(id)
    }

  
   
    return (
       <li className="collection-item">
            <div className="center" style={{}}>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={handleCurrentLog}>{message}</a>
                <br/>
                <span className="grey-text">
                    <span className="black-text">ID #{id} </span>
                    last updated by {" "}
                    <span className="black-text">{tech}</span> 
                   <br/> {" "} <span style={{marginLeft:0}}>on</span> {" "} 
                     <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
                </span>
               
                
            </div>
            <a href="#!" className="secondary-content" onClick={handleDelete}>
                    <i className='material-icons grey-text small'>delete_forever</i>
                   
                </a>
            
                <a href="#!" className="secondary-content" onClick={handleCompletedLog}>
                <i className='material-icons grey-text small'>check</i>  
                   
                </a>

       </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog:PropTypes.func.isRequired,
    setCurrentLog: PropTypes.func.isRequired,
   
    
}

export default connect(null,{deleteLog,setCurrentLog,addCompletedLog})(LogItem)
