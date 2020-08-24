const ADD_USER = 'ADD_USER';
const ADD_USER_ERROR = 'ADD_USER_ERROR';

const addUser = (newUser) => async (dispatch) => {
  try {
    //Ajax to add user via API
    dispatch({ type: ADD_USER, ...newUser });
  } catch {
    dispatch({ type: ADD_USER_ERROR });
  }
};

export { addUser }
