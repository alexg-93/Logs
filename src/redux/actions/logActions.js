import { SEARCH_LOGS,GET_LOGS, SET_LOADING, LOGS_ERROR  , ADD_LOG,DELETE_LOG, SET_CURRENT, CLEAR_CURRENT,UPDATE_LOG} from "./types";
import M from 'materialize-css/dist/js/materialize'

// Get logs from server
export const getLogs = () => async dispatch => {

    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type:GET_LOGS,
            payload: data
        })
    } catch (err) {
       dispatch({
            type: LOGS_ERROR,
            payload:err.response.statusText
        })
    }
   
    
};

//Add new log to db
export const addLog = (log) => async dispatch=>{

    try {

        setLoading();

        const res = await fetch('/logs' , {
            method: 'POST',
            body: JSON.stringify(log),
            headers : {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type:ADD_LOG,
            payload: data
        })
    } catch (err) {
       dispatch({
            type: LOGS_ERROR,
            payload:err.response.statusText
        })
    }
   
}

//Delete logs from server db
export const deleteLog = (id) => async dispatch=>{
 
    try {

        setLoading(); //true
    
        await fetch(`/logs/${id}`,{
            method: 'DELETE'
        });
     
        dispatch({
            type:DELETE_LOG,
            payload: id
        })
       
    } catch (err) {
       dispatch({
            type: LOGS_ERROR,
            payload:err.response.statusText
        })
    }
   

}


//Update log on server
export const updateLog = (log) => async dispatch=>{
 
    try {

        setLoading(); //true
    
        const res = await fetch(`/logs/${log.id}`,{
            method: 'PATCH',
            body: JSON.stringify(log),
            headers : {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
       

        dispatch({
            type:UPDATE_LOG,
            payload: data
        })
       
    } catch (err) {
       dispatch({
            type: LOGS_ERROR,
            payload:err.response.statusText
        })
    }
   

}


// Get logs from server
export const searchLogs = (text) => async dispatch => {

    try {
        setLoading();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
       
        dispatch({
            type:SEARCH_LOGS,
            payload: data
        })
    } catch (err) {
       dispatch({
            type: LOGS_ERROR,
            payload:err.response.statusText
        })
    }
   
    
};


// Set current log
export const setCurrentLog = (log) => {
  return {
      type:SET_CURRENT,
      payload: log
  }
}

// clear current log
export const clearCurrentLog = () => {
    return {
        type:CLEAR_CURRENT,
        payload: null
    }
  }
  

//Set loading to true
export const setLoading = () => {
   return {
       type:SET_LOADING
   }
};





//Add completed logs to db
export const addCompletedLog = (log) => async dispatch=>{

    try {

        setLoading();

        const res = await fetch('/completedlogs' , {
            method: 'POST',
            body: JSON.stringify(log),
            headers : {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type:'ADD_COMPLETED_LOG',
            payload: data
        })
    } catch (err) {
       dispatch({
            type: LOGS_ERROR,
            payload:err
        })
    }
   
}

// Get logs from server
export const getCompletedLogs = () => async dispatch => {

    try {
        setLoading();

        const res = await fetch('/completedlogs');
        const data = await res.json();
        console.log(data)
        dispatch({
            type:'GET_COMPLETED_LOGS',
            payload: data
        })
    } catch (err) {
       dispatch({
            type: LOGS_ERROR,
            payload:err
        })
    }
   
    
};

