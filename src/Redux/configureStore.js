// import createscore and configurestore
import { legacy_createStore as createStore, combineReducers } from 'redux';
// import thunk
import thunk from 'redux-thunk';
// import blogReducer from blog/blog.js
import blogReducer from './blog/blog';
// import { reducer as formReducer } from 'redux-form';
// import { reducer as authReducer } from './AUTH/auth';
// import { reducer as userReducer } from './USER/user';
// redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';
// combineReducers and use devtools
const rootReducer = combineReducers({
    // form: formReducer,
    blog: blogReducer,
    // auth: authReducer,
    // user: userReducer
});
// create store
const store = createStore(rootReducer, composeWithDevTools(thunk));
// export store
export default store;
