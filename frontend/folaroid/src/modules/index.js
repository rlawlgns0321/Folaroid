import { combineReducers } from 'redux';
import authReducer from './auth';
import portfolioProjectReducer from './portfolioProject';
import personalReducer from './intro/personal';
import sloganReducer from './intro/slogan';
import portfolioReducer from './portfolio';

const rootReducer = combineReducers({
    auth: authReducer,
    portfolioProject: portfolioProjectReducer,
    personal: personalReducer,
    slogan: sloganReducer,
    portfolio: portfolioReducer,
});

export default rootReducer;
