import React, { useState , useEffect } from "react";
import M from 'materialize-css/dist/js/materialize'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateLog} from '../../redux/actions/logActions'
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({updateLog,current}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

   useEffect(() => {
     
     if(current){
       setMessage(current.message)
       setAttention(current.attention)
       setTech(current.tech)
     }
   },[current])

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleTech = (e) => {
    setTech(e.target.value);
  };

  const handleAttention = () => {
    setAttention(!attention);
  };

  const onSubmit = () =>{
  
    
        const updatedLog = {
          id:current.id,
          message,
          tech,
          attention,
          date: new Date()
        }
        updateLog(updatedLog)
        M.toast({html:'Log Updated'})
       
      //clear form fields
      setMessage('')
      setTech("")
      setAttention(false)
  
      
      
  }



  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              
              onChange={handleMessage}
            />
          
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech}
              onChange={handleTech}
              
            >
              <option value="" disabled selected>
                Choose Techician
              </option>
             <TechSelectOptions/>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  onChange={handleAttention}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
        
      </div>


      <div className="modal-footer">

          <button  className={"modal-close waves-effect red btn"}>
              Close
          </button>
          {" "}
          <a href="#!" onClick={onSubmit} className={!!message && tech ? "modal-close waves-effect blue btn" : "modal-close waves-effect blue btn disabled"}>
              Enter
          </a>
       
        
         
      </div>
      
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditLogModal.propTypes = {
current: PropTypes.object,
updateLog:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
  current:state.log.current
})

export default connect(mapStateToProps,{updateLog})( EditLogModal);
