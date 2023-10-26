const initState = {
  number: 1000,
  string: 'HelloWorld',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'countUp':
      state.number = state.number + 100;
      return state;
    default:
      return {...state};
  }
};

export default reducer;
