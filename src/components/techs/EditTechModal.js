import React, { useState , useEffect } from "react";
import M from 'materialize-css/dist/js/materialize'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateTech} from '../../redux/actions/techActions'


const EditTechModal = ({updateTech,current}) => {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(false);

   useEffect(() => {
     
     if(current){
       setFirstName(current.firstName)
       setLastName(current.lastName)
     }
   },[current])

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };


  const onSubmit = () =>{
  
        const updatedTech = {
          id:current.id,
          firstName,
          lastName,
          date: new Date()
        }
        updateTech(updatedTech)
        M.toast({html:'Tech Details updated'})
       
      //clear inputs fields
      setFirstName('')
      setLastName("")
    
      
      
  }

  return (
    <div id="edit-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Tech Details</h4>
        <div className="row">
          <div className="input-field">
    
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleFirstName}
            />
           {!firstName && <label htmlFor="firstName">First Name</label>}
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
           {!lastName && <label htmlFor="lastName">Last Name</label>}
          </div>
        </div>

      </div>

      <div className="modal-footer">
      <button  className={"modal-close waves-effect red btn"}>
              Close
          </button>
          {" "}
          <a href="#!" onClick={onSubmit} className={!!firstName && lastName ? "modal-close waves-effect blue btn" : "modal-close waves-effect blue btn disabled"}>
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

EditTechModal.propTypes = {
current: PropTypes.object,
updateTech:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
  current:state.tech.current
})

export default connect(mapStateToProps,{updateTech})( EditTechModal);
