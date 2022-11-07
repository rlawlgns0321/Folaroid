import { combineReducers } from 'redux';
import authReducer from './auth';
import portfolioProjectReducer from './portfolioProject';
import personalReducer from './intro/personal'

const rootReducer = combineReducers({
    auth: authReducer,
    portfolioProject: portfolioProjectReducer,
    personal: personalReducer

});

export default rootReducer;
    