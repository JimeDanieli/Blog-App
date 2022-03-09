import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer/index';
import thunk from 'redux-thunk' //me sirve para usar acciones asincronicas

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)