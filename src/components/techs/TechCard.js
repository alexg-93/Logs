import React from "react";
import { connect } from "react-redux";


const TechCard = ({current}) => {
    

 
  return (
    <div id="tech-profile-modal" className="modal">
      <div id="tech-profile-modal" className="modal-content ">
        <div className="card center">
          <div
            className="card-image waves-effect waves-block waves-light"
            style={{
              margin:'auto',
              top: "15px",
              width: '200px',
              height: '200px',
              border: "2px solid",
              borderRadius:'50%'

            }}
          >
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw92ToLJnjnUmsEbTRFStNtKCD-PJBRbnqYg&usqp=CAU"
              }
              className="activator"
              alt="ProfilePic"
            />
          </div>
          <div className="card-content">
        
                    <ul className="collection">
                    <li className="collection-item">Name : {current!==null && current.firstName } {current!==null && current.lastName}</li>
                    <li className="collection-item">Department : {current!==null && current.department}</li>
                    <li className="collection-item">Working since : {current!==null && current.date}</li>
                   </ul>

          </div>
          
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect red btn">
          Go Back
        </a>
      </div>
    </div>
  );
};


const mapStateToProps = state =>(
 {
   current:state.tech.current
  })
  
export default connect(mapStateToProps)(TechCard);
