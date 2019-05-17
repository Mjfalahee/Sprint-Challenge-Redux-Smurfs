import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_START});
  return axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({type:FETCH_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE});
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch({type: ADD_START});
  return axios 
    .post('http://localhost:3333/smurfs', smurf)
    .then( res => {
      console.log(res.data);
      dispatch({type: ADD_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: ADD_FAILURE});
    })


}