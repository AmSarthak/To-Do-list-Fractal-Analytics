import { createStore } from 'redux'

import asyncReducer from './reducers'

const store = createStore(asyncReducer);

export default store;