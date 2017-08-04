const userInitialState = {
  name: ''
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {...state, name: action.name};
    default:
      return userInitialState;
  }
};

export default userReducer;