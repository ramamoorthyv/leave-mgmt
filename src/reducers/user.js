import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

export default (state = [], action) => { 

	switch (action.type){
		case 'CREATE_NEW_USER':
		 //return state.user.push(action.user)
		 console.log(Object.assign({}, state, action.user));
		 //return Object.assign({}, state, action.user);
		 return [
        ...state,
        Object.assign({}, action.user)
      	];

		default: 
		return state;
	}
}