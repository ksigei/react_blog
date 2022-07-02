// configure store for redux and redux dev tools
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers/reducers';
// dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
// combine reducers
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;