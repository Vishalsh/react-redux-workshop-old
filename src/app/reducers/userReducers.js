const userInitialState = {
  user: {
    name: ''
  }
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {...state.user, name: action.name};
    default:
      return userInitialState;
  }
};

export default userReducer;