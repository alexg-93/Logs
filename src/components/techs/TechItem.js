import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../redux/actions/techActions";
import { setCurrentTech } from "../../redux/actions/techActions";


const TechItem = ({ tech, deleteTech, setCurrentTech }) => {

  const { firstName, lastName, id } = tech;

  const handleCurrentTech = () => {
    setCurrentTech(tech);
  };

  const handleDeleteTech = () => {
    deleteTech(id);
  };



  return (
    <li className="collection-item">
      <div className="center">
        <a
          href="#edit-tech-modal"
          className={`modal-trigger`}
          onClick={handleCurrentTech}
        >
          {firstName} {lastName}
        </a>

        <a href="#!" className="secondary-content" onClick={handleDeleteTech}>
          <i className="material-icons grey-text">delete</i>
        </a>
        <a href="#tech-profile-modal" className={"secondary-content modal-trigger"} onClick={handleCurrentTech}>
        <i className="material-icons grey-text">visibility</i>
        </a>
        <a
          href="#edit-tech-modal"
          className={`modal-trigger`}
          onClick={handleCurrentTech}
        >
           <i className="material-icons grey-text secondary-content">edit</i>
        </a>
    
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  setCurrentTech: PropTypes.func.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech, setCurrentTech })(TechItem);
