import { createStore } from 'redux';
import reducer from './Reducer'

const initValues = {
    value: 1
};

const store = createStore(reducer, initValues);

export default store;