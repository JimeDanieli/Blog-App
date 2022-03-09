import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer/index';
import thunk from 'redux-thunk'