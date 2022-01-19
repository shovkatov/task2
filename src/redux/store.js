import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerUser from './reducerUser'

const store = createStore(reducerUser, composeWithDevTools(applyMiddleware(thunk)));

export default store;
