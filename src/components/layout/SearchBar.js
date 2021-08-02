import React , {useRef} from 'react'
import {connect} from 'react-redux';
import {searchLogs} from '../../redux/actions/logActions'
import PropTypes from 'prop-types'


const SearchBar = ({searchLogs}) => {

const text = useRef('')

const handleSearchLogs = () =>{

  searchLogs(text.current.value)
}

const handleClearText = () =>{
   text.current.value = "";
}


    return (
      
        <nav style={{margin:'auto',marginTop:'40px',marginBottom:'41px',width:'350px',borderRadius:'5px'}} className="blue">
        
        <div className="nav-wrapper">
        
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder='Search for logs..' ref={text} onChange={handleSearchLogs}/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons" onClick={handleClearText}>close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

SearchBar.propTypes={
  searchLogs: PropTypes.func.isRequired,

}

export default connect(null,{searchLogs}) (SearchBar)
