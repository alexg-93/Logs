import React, { useState } from "react";
import M from 'materialize-css/dist/js/materialize'

import {connect} from 'react-redux'
import {addTech} from '../../redux/actions/techActions'

const AddTechModal = ({addTech}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () =>{
    

      const newTech = {
        firstName,
        lastName,
        department:'IT',
        date: new Date().toDateString()
      }

      addTech(newTech);

      M.toast({html:`New technian added successfully`})

      setFirstName('')
      setLastName("")
    
  }


  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

 
  return (
    <div id="add-tech-modal" className="modal" >
      <div className="modal-content">
        <h4>Add new techician info</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              
              onChange={handleFirstName}
            />
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              
              onChange={handleLastName}
            />
            <label htmlFor="lastName" className="active">
             Last Name
            </label>
          </div>
        </div>
              
      </div>

      <div className="modal-footer">
      <button  className="modal-close waves-effect red btn">
              Close
          </button>
          {" "}
          <a href="#!" onClick={onSubmit} className={!!firstName&&!!lastName ? "modal-close waves-effect blue btn " : "modal-close waves-effect blue btn disabled"}>
              Enter
          </a>
      </div>



    </div>
  );
};



export default connect(null,{addTech})(AddTechModal);
