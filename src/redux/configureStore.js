import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import { missionReducers } from './missions/missions';

const rootReducer = combineReducers({ rockets: rocketReducer, missions: missionReducers });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
