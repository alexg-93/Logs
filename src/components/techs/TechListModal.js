import React, { useEffect,useRef } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs } from "../../redux/actions/techActions";
import { searchTechs } from "../../redux/actions/techActions";
import PropTypes from "prop-types";

const TechListModal = ({ tech: { techs, loading }, getTechs, searchTechs }) => {

  useEffect(() => {
    getTechs();
  }, []);

const text = useRef('')

const handleSearchTechs= () =>{

  searchTechs(text.current.value)
}


  return (
   <>
    

    <div id="tech-list-modal" className="modal">

    <nav style={{marginBottom:'30px'}} className="blue">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder='Search for techs..' ref={text} onChange={handleSearchTechs}/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>


      <div className="modal-content center">
        <h4>Techs list</h4>
        <ul className="collection">
          {(!loading && techs === null) || techs.length === 0 ? (
            <p className="center">No techs to show..</p>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>

      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect red btn">
          Close
        </a>
      </div>
    </div>
  </>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
  searchTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs,searchTechs })(TechListModal);
