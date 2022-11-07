import { combineReducers } from 'redux';
import authReducer from './auth';
import portfolioProjectReducer from './portfolioProject';
import personalReducer from './intro/personal'
import sloganReducer from './intro/slogan'

const rootReducer = combineReducers({
    auth: authReducer,
    portfolioProject: portfolioProjectReducer,
    personal: personalReducer,
    slogan: sloganReducer

});

export default rootReducer;
    