import {createStore,applyMiddleware,compose} from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'

configureStore = () => {
    const composeEnhancers = window.__REDEX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer,{},composeEnhancers(
        applyMiddleware(ReduxThunk)
    ));
    return store;
};

export default configureStore