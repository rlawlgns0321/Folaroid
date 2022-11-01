import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import name from './name'

export default combineReducers({
    name,
    pender: penderReducer
});