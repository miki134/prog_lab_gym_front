import { AUTH, OPERATIONS } from './actionTypes';
import api from '../api/handle.js';

const userRegistrationStarted = () => {
  return {
    type: AUTH.REGISTER_STARTED,
  };
};

const userRegistrationSucceeded = (token) => {
  return {
    type: AUTH.REGISTER_SUCCEEDED,
    payload: {
      token: token,
    },
  };
};

const userRegistrationFailed = (err) => {
  console.log(err.data.error);
  return {
    type: AUTH.REGISTER_FAILED,
    payload: {
      registerError: err.data.error,
    },
  };
};

export const registerUser = (name, surname, email, password) => {
  return async (dispatch) => {
    dispatch(userRegistrationStarted());
    try {
      const response = await api.register(name, surname, email, password);
      dispatch(userRegistrationSucceeded(response.token));
    } catch (err) {
      // console.log(err.response);
      // if (err.code === 401) {
      //   dispatch(logoutUser());
      // } else {
      dispatch(userRegistrationFailed(err.response));
      // }
    }
  };
};

const loginStarted = () => {
  return {
    type: AUTH.LOGIN_STARTED,
  };
};

const loginSucceeded = (token) => {
  return {
    type: AUTH.LOGIN_SUCCEEDED,
    payload: {
      token: token,
    },
  };
};

const loginFailed = (err) => {
  return {
    type: AUTH.LOGIN_FAILED,
    payload: {
      loginError: err.data.error,
    },
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStarted());
    try {
      const response = await api.login(email, password);
      dispatch(loginSucceeded(response.token));
    } catch (err) {
      console.log(err.response);
      dispatch(loginFailed(err.response));
    }
  };
};

export const logoutUser = () => {
  return {
    type: AUTH.LOGOUT,
  };
};

const allUsersSucceeded = (data) => {
  return {
    type: OPERATIONS.ALL_USERS_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const allUsersFailed = (err) => {
  return {
    type: OPERATIONS.ALL_USERS_FAILED,
    payload: {
      getAllUsersError: err.data.error,
    },
  };
}

const allUsersStarted = () => {
  return {
    type: OPERATIONS.ALL_USERS_STARTED,
  };
}

export const getAllUsers = (token) => {
  return async (dispatch) => {
    dispatch(allUsersStarted());
    try {
      const response = await api.getAllUsers(token);
      dispatch(allUsersSucceeded(response.data));
    } catch (err) {
      dispatch(allUsersFailed(err.response));
    };
  }
}

const oneUsersSucceeded = (data) => {
  return {
    type: OPERATIONS.ONE_USER_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const oneUsersFailed = (err) => {
  return {
    type: OPERATIONS.ONE_USER_FAILED,
    payload: {
      getOneUsersError: err.data.error,
    },
  };
}

const oneUsersStarted = () => {
  return {
    type: OPERATIONS.ONE_USER_STARTED,
  };
}

export const getOneUser = (token) => {
  return async (dispatch) => {
    dispatch(oneUsersStarted());
    try {
      const response = await api.getOneUser(token);
      dispatch(oneUsersSucceeded(response.data));
    } catch (err) {
      dispatch(oneUsersFailed(err.response));
    };
  }
}

const updateUserSucceeded = (data) => {
  return {
    type: OPERATIONS.UPDATE_USER_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const updateUserFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.UPDATE_USER_FAILED,
    payload: {
      updateUserError: err.data.error,
    },
  };
}

const updateUserStarted = () => {
  return {
    type: OPERATIONS.UPDATE_USER_STARTED,
  };
}

export const updateUser = (token, name, surname, email, password, role) => {
  return async (dispatch) => {
    dispatch(updateUserStarted());
    try {
      const response = await api.updateUser(token, name, surname, email, password, role);
      dispatch(updateUserSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(updateUserFailed(err.response));
    };
  }
}