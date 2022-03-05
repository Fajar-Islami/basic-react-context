import React, { useReducer } from 'react';

function reducer(state, action) {
  //   console.log('state', state);
  //   console.log('action', action);

  // return 'ini adalah reducer';
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    case 'toggleTheme':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      throw new Error();
  }
}

const Reducer = () => {
  const inititalState = {
    count: 0,
    theme: 'light',
  };

  const [state, dispatch] = useReducer(reducer, inititalState);
  console.log(state);

  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>
        +
      </button>
      <hr />
      <span>{state.theme}</span>
      <button onClick={() => dispatch({ type: 'toggleTheme' })}>
        Toggle Theme
      </button>
    </>
  );
};

export default Reducer;
