import { createStore } from 'redux';

const initialState = {
  count: 0,
  x: ""
}

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    case "handleChange":
      return Object.assign({}, state, { x: action.value });
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
