import { combineReducers } from 'redux';
import Actioncountreducer from './reducer_active_counter';

const rootReducer = combineReducers({

  counter:Actioncountreducer

});

export default rootReducer;
 