import { combineReducers } from 'redux';
import authReducer from './auth';
import portfolioProjectReducer from './portfolioProject';
import activityReducer from './intro/activity'
import archivingReducer from './intro/archiving'
import awardsReducer from './intro/awards'
import careerReducer from './intro/career'
import certificationReducer from './intro/certification'
import languageReducer from './intro/language'
import personalReducer from './intro/personal'
import schoolReducer from './intro/school'
import sloganReducer from './intro/slogan'


const rootReducer = combineReducers({
    auth: authReducer,
    portfolioProject: portfolioProjectReducer,
    activity: activityReducer,
    archiving: archivingReducer,
    awards: awardsReducer,
    career: careerReducer,
    certification: certificationReducer,
    language: languageReducer,
    personal: personalReducer,
    school: schoolReducer,
    slogan: sloganReducer
});

export default rootReducer;
    