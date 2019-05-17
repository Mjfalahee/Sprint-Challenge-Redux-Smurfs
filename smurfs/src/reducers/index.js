/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE
} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


function reducer(state = initialState, action) {
  console.log('Reducer', action);
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      } 
    case FETCH_SUCCESS:
      return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload,
      error: ''
    } 
    case FETCH_FAILURE:
      return {
        ...state,
        error: 'Fetch Failed'
      }
    case ADD_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADD_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: ''
      }
    case ADD_FAILURE:
      return {
        ...state,
        error: 'Add Smurf Failed'
      }
      default:
        return state;
  }
}

export default reducer;