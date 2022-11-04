import { combineReducers } from 'redux';
import portfolioProjectReducer from './portfolioProject';
import authReducer from './auth';

const rootReducer = combineReducers({
    auth: authReducer,
    portfolioProject: portfolioProjectReducer,
});

export default rootReducer;
