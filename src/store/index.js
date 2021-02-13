import { createStore } from 'redux';

const initialState = {
  count: 3
};

const reducer = (state = initialState, action) => {
  console.log("reducer berjalan", action);
  return state;
}

const store = createStore(reducer);

export default store;
