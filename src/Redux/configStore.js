// configure store for redux and redux dev tools
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './Reducers/reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
