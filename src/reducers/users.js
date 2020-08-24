const initialState = {
  user: {
    username: '',
    email: '',
    password: '',
  }
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': return {
      user: {
        username: action.username,
        email: action.email,
        password: action.password,
      }
    };
    default: return state;
  }
};

export default usersReducer;
