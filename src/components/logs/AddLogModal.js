import React, { useState} from "react";
import M from 'materialize-css/dist/js/materialize'
import {connect} from 'react-redux'
import {addLog} from '../../redux/actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions'
import { v4 as uuidv4 } from 'uuid';

const AddLogModal = ({addLog}) => {


  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const handleMessage = (e) => {
    
    setMessage(e.target.value);
  };

  const handleTech = (e) => {
    setTech(e.target.value);
  };

  const handleAttention = () => {
    setAttention(!attention);
  };

  const onSubmit = (e) =>{
    e.preventDefault();
      
      const newLog = {
        message: message,
        attention,
        tech,
        date: new Date(),
        id: uuidv4().substr(0,8)
      }

      addLog(newLog)

      M.toast({html:`Log added by ${tech}`})
      
      setMessage('')
      setTech("")
      setAttention(false)

     
  }



  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              required={true}
              onChange={handleMessage}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
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
          <a href="#!" onClick={onSubmit} className={ !!message && tech ? 'modal-close waves-effect blue btn ' :'modal-close waves-effect blue btn disabled' }>
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



export default connect(null,{addLog})(AddLogModal);
