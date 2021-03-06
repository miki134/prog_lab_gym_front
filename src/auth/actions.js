import { AUTH, OPERATIONS, INSIDE } from './actionTypes';
import api from '../api/handle.js';

const userRegistrationStarted = () => {
  return {
    type: AUTH.REGISTER_STARTED,
  };
};

const userRegistrationSucceeded = (data) => {
  return {
    type: AUTH.REGISTER_SUCCEEDED,
    payload: {
      token: data.token,
      role: data.data,
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
      dispatch(userRegistrationSucceeded(response));
    } catch (err) {
      dispatch(userRegistrationFailed(err.response));
    }
  };
};

const loginStarted = () => {
  return {
    type: AUTH.LOGIN_STARTED,
  };
};

const loginSucceeded = (data) => {
  console.log('action loin suc');
  return {
    type: AUTH.LOGIN_SUCCEEDED,
    payload: {
      token: data.token,
      role: data.data,
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
      console.log(response);
      dispatch(loginSucceeded(response));
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
      dispatch(allUsersSucceeded(response));
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
      dispatch(oneUsersSucceeded(response));
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

const allTrainersSucceeded = (data) => {
  return {
    type: OPERATIONS.ALL_TRAINERS_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const allTrainersFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ALL_TRAINERS_FAILED,
    payload: {
      getAllTrainersError: err.data.error,
    },
  };
}

const allTrainersStarted = () => {
  return {
    type: OPERATIONS.ALL_TRAINERS_STARTED,
  };
}

export const getAllTrainers = () => {
  return async (dispatch) => {
    dispatch(allTrainersStarted());
    try {
      const response = await api.getAllTrainers();
      dispatch(allTrainersSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(allTrainersFailed(err.response));
    };
  }
}

const allEquipmentSucceeded = (data) => {
  return {
    type: OPERATIONS.ALL_EQUIPMENT_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const allEquipmentFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ALL_EQUIPMENT_FAILED,
    payload: {
      getAllEquipmentError: err.data.error,
    },
  };
}

const allEquipmentStarted = () => {
  return {
    type: OPERATIONS.ALL_EQUIPMENT_STARTED,
  };
}

export const getAllEquipment = () => {
  return async (dispatch) => {
    dispatch(allEquipmentStarted());
    try {
      const response = await api.getAllEquipment();
      dispatch(allEquipmentSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(allEquipmentFailed(err.response));
    };
  }
}

const allWorkoutsSucceeded = (data) => {
  return {
    type: OPERATIONS.ALL_WORKOUTS_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const allWorkoutsFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ALL_WORKOUTS_FAILED,
    payload: {
      getAllWorkoutsError: err.data.error,
    },
  };
}

const allWorkoutsStarted = () => {
  return {
    type: OPERATIONS.ALL_WORKOUTS_STARTED,
  };
}

export const getAllWorkouts = () => {
  return async (dispatch) => {
    dispatch(allWorkoutsStarted());
    try {
      const response = await api.getAllWorkouts();
      dispatch(allWorkoutsSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(allWorkoutsFailed(err.response));
    };
  }
}

const allDietsSucceeded = (data) => {
  return {
    type: OPERATIONS.ALL_DIETS_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const allDietsFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ALL_DIETS_FAILED,
    payload: {
      getAllDietsError: err.data.error,
    },
  };
}

const allDietsStarted = () => {
  return {
    type: OPERATIONS.ALL_DIETS_STARTED,
  };
}

export const getAllDiets = () => {
  return async (dispatch) => {
    dispatch(allDietsStarted());
    try {
      const response = await api.getAllDiets();
      dispatch(allDietsSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(allDietsFailed(err.response));
    };
  }
}

const addWorkoutSucceeded = (data) => {
  return {
    type: OPERATIONS.ADD_WORKOUT_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const addWorkoutFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ADD_WORKOUT_FAILED,
    payload: {
      addWorkoutError: err.data.error,
    },
  };
}

const addWorkoutStarted = () => {
  return {
    type: OPERATIONS.ADD_WORKOUT_STARTED,
  };
}

export const addWorkout = (token, name, lengthOfTime, quantityOfExercises, difficulty, description) => {
  return async (dispatch) => {
    dispatch(addWorkoutStarted());
    try {
      const response = await api.addWorkout(token, name, lengthOfTime, quantityOfExercises, difficulty, description);
      dispatch(addWorkoutSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(addWorkoutFailed(err.response));
    };
  }
}

const addDietSucceeded = (data) => {
  return {
    type: OPERATIONS.ADD_DIET_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const addDietFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ADD_DIET_FAILED,
    payload: {
      addDietError: err.data.error,
    },
  };
}

const addDietStarted = () => {
  return {
    type: OPERATIONS.ADD_DIET_STARTED,
  };
}

export const addDiet = (token, name, quantityOfProducts, numberOfMealsPerDay, meat, description) => {
  return async (dispatch) => {
    dispatch(addDietStarted());
    try {
      const response = await api.addDiet(token, name, quantityOfProducts, numberOfMealsPerDay, meat, description);
      dispatch(addDietSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(addDietFailed(err.response));
    };
  }
}

const addEquipmentSucceeded = (data) => {
  return {
    type: OPERATIONS.ADD_EQUIPMENT_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const addEquipmentFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ADD_EQUIPMENT_FAILED,
    payload: {
      addEquipmentError: err.data.error,
    },
  };
}

const addEquipmentStarted = () => {
  return {
    type: OPERATIONS.ADD_EQUIPMENT_STARTED,
  };
}

export const addEquipment = (token, name, length, height, width, weight, description) => {
  return async (dispatch) => {
    dispatch(addEquipmentStarted());
    try {
      const response = await api.addEquipment(token, name, length, height, width, weight, description);
      dispatch(addEquipmentSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(addEquipmentFailed(err.response));
    };
  }
}

const addTrainerSucceeded = (data) => {
  return {
    type: OPERATIONS.ADD_TRAINER_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const addTrainerFailed = (err) => {
  console.log(err.data.error);
  return {
    type: OPERATIONS.ADD_TRAINER_FAILED,
    payload: {
      addTrainerError: err.data.error,
    },
  };
}

const addTrainerStarted = () => {
  return {
    type: OPERATIONS.ADD_TRAINER_STARTED,
  };
}

export const addTrainer = (token, name, surname, birthday, phone, description) => {
  return async (dispatch) => {
    dispatch(addTrainerStarted());
    try {
      const response = await api.addTrainer(token, name, surname, birthday, phone, description);
      dispatch(addTrainerSucceeded(response.data));
    } catch (err) {
      console.log(err.response);
      dispatch(addTrainerFailed(err.response));
    };
  }
}

const deleteUserSucceeded = (data) => {
  return {
    type: OPERATIONS.DELETE_USER_SUCCEEDED,
    payload: {
      data,
    },
  };
}

const deleteUserFailed = (err) => {
  console.log(err);
  return {
    type: OPERATIONS.DELETE_USER_FAILED,
    payload: {
      // deleteUserError: err.data.error,
    },
  };
}

const deleteUserStarted = () => {
  return {
    type: OPERATIONS.DELETE_USER_STARTED,
  };
}

export const deleteUser = (token, name, surname, birthday, phone, description) => {
  return async (dispatch) => {
    dispatch(deleteUserStarted());
    try {
      const response = await api.deleteUser(token, name, surname, birthday, phone, description);
      console.log(response);

      dispatch(deleteUserSucceeded(response.data));
    } catch (err) {
      console.log(err);
      dispatch(deleteUserFailed(err.response));
    };
  }
}


const setDark = (val) => {
  return {
    type: INSIDE.DARK_MODE,
    payload: {
      setdarkmode: val,
    },
  };
}

export const setDarkMode = (val) => {
  return async (dispatch) => {
    dispatch(setDark(val));
  }
}