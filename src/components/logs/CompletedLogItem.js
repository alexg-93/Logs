import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {connect} from 'react-redux'

import M from 'materialize-css/dist/js/materialize'


const CompletedLogItem = ({log}) => {

   
   
    // const {id,message,tech,date} = log;

   
    return (
       <li className="collection-item">
            <div className="center">
                <a href="#!" className={`modal-trigger ${log&&log.attention ? 'red-text' : 'blue-text'}`}>{log&&log.message}</a>
                <br/>
                <span className="grey-text">
                    <span className="black-text">ID #{log&&log.id} </span>
                    completed by {" "}
                    <span className="black-text">{log&&log.tech}</span> 
                   <br/> {" "} <span style={{marginLeft:5}}>on</span> {" "} 
                     <Moment format='MMMM Do YYYY, h:mm:ss a'>{log&&log.date}</Moment>
                </span>

            </div>
       </li>
    )
}

CompletedLogItem.propTypes = {
    log: PropTypes.object.isRequired,  
}

const mapStateToProps = state =>({
    current:state.log
  })

export default connect(mapStateToProps,{})(CompletedLogItem)
