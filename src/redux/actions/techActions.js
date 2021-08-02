import {ADD_TECH,GET_TECHS,TECHS_ERROR,DELETE_TECH,SET_LOADING,UPDATE_TECH,CLEAR_CURRENT_TECH,SET_CURRENT_TECH,SEARCH_TECHS} from "./types";
import M from 'materialize-css/dist/js/materialize'


// Get techs from server
export const getTechs = () => async dispatch => {

    try {
        setLoading();
        
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type:GET_TECHS,
            payload: data
        })
    } catch (err) {
       dispatch({
            type: TECHS_ERROR,
            payload:err.response.statusText
        })
    }

};


//Add new log to db
export const addTech = (tech) => async dispatch=>{

    try {

        setLoading();

        const res = await fetch('/techs' , {
            method: 'POST',
            body: JSON.stringify(tech),
            headers : {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        
        dispatch({
            type:ADD_TECH,
            payload: data
        })
    } catch (err) {
        console.log(err)
        console.log(err.response.data)
       dispatch({
            type: TECHS_ERROR,
            payload:err.response.statusText
        })
    }
   

}

//Delete logs from server db
export const deleteTech = (id) => async dispatch=>{
 
    try {

        setLoading(); //true
    
        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        });
     
        dispatch({
            type:DELETE_TECH,
            payload: id
        })
       
    } catch (err) {
       dispatch({
            type: TECHS_ERROR,
            payload:err.response.statusText
        })
    }
   

}

//Update tech on server
export const updateTech = (tech) => async dispatch=>{
 
    try {

        setLoading(); //true
    
        const res = await fetch(`/techs/${tech.id}`,{
            method: 'PATCH',
            body: JSON.stringify(tech),
            headers : {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
      

        dispatch({
            type:UPDATE_TECH,
            payload: data
        })
       
    } catch (err) {
       dispatch({
            type: TECHS_ERROR,
            payload:err.response.data
        })
    }
   

}

//Set loading to true
export const setLoading = () => {
    return {
        type:SET_LOADING
    }
 };


// Set current tech
export const setCurrentTech = (tech) => {
    return {
        type:SET_CURRENT_TECH,
        payload: tech
    }
  }
  
  // clear current tech
  export const clearCurrentTech = () => {
      return {
          type:CLEAR_CURRENT_TECH,
          payload: null
      }
    }
    
  
  
// search techs from server
export const searchTechs = (text) => async dispatch => {

    try {
        setLoading();

        const res = await fetch(`/techs?q=${text}`);
        const data = await res.json();
      
        dispatch({
            type:SEARCH_TECHS,
            payload: data
        })
    } catch (err) {
       dispatch({
            type: TECHS_ERROR,
            payload:err.response.data
        })
    }
   
    
};


// Set current tech
export const setCurrenTech = (tech) => {
  return {
      type:SET_CURRENT_TECH,
      payload: tech
  }
}

// clear current tech
export const clearCurrentLog = () => {
    return {
        type:CLEAR_CURRENT_TECH,
        payload: null
    }
  }
  





