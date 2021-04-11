import { AUTH, INSIDE, OPERATIONS } from './actionTypes';

const initialState = () => {
  const tok = localStorage.getItem('token');
  const rol = localStorage.getItem('role');
  return({
  token: tok,
  data: '',
  role: rol,

  loginError: '',
  loginActionEnded: false,

  registerError: '',
  registerActionEnded: false,

  getAllUsersError: '',
  getAllUsersActionEnded: false,

  getOneUserError: '',
  getOneUserActionEnded: false,

  updateUserError: '',
  updateUserActionEnded: false,


  getAllTrainersError: '',
  getAllTrainersActionEnded: false,

  addTrainerError: '',
  addTrainerActionEnded: false,

  getAllEquipmentError: '',
  getAllEquipmentActionEnded: false,

  addEquipmentError: '',
  addEquipmentActionEnded: false,

  getAllWorkoutsError: '',
  getAllWorkoutsActionEnded: false,

  addWorkoutError: '',
  addWorkoutActionEnded: false,

  getAllDietsError: '',
  getAllDietsActionEnded: false,

  addDietError: '',
  addDietActionEnded: false,

  setdarkmode: 'nie',
  });
}

const authReducer = (state = initialState(), action) => {
  console.log(action.type);
  switch (action.type) {
    case AUTH.REGISTER_STARTED: {
      return {
        ...state,
        registerActionEnded: false, 
      };
    }
    case AUTH.REGISTER_FAILED: {
      console.log('index', action.payload.error);
      const { registerError } = action.payload;
      return {
        ...state,
        registerError: registerError,
        registerActionEnded: false,
      };
    }
    case AUTH.REGISTER_SUCCEEDED: {
      const { token, role } = action.payload;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      return {
        ...state,
        token: token,
        role: role,
        registerActionEnded: true,
      };
    }
    case AUTH.LOGIN_STARTED: {
      console.log('LOGIN_SUCCEEDED');
      return {
        ...state,
        loginActionEnded: false,
        registerActionEnded: false,
      };
    }
    case AUTH.LOGIN_FAILED: {
      const { loginError } = action.payload;
      return {
        ...state,
        loginError: loginError,
        loginActionEnded: false,
      };
    }
    case AUTH.LOGIN_SUCCEEDED: {
      console.log('LOGIN_SUCCEEDED');
      const { token, role } = action.payload;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      return {
        ...state,
        token: token,
        role: role,
        loginActionEnded: true,
      };
    }
    case AUTH.LOGOUT: {
      localStorage.clear();
      const newState = initialState();
      return {
        ...newState,
      };
    }
    case OPERATIONS.ALL_USERS_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        getAllUsersActionEnded: true,
      }
    }
    case OPERATIONS.ALL_USERS_STARTED: {
      return {
        ...state,
        getAllUsersActionEnded: false,
      }
    }
    case OPERATIONS.ALL_USERS_FAILED: {
      return {
        ...state,
        getAllUsersActionEnded: false,
        getAllUsersError: action.payload.getAllUsersError,
      }
    }
    case OPERATIONS.ONE_USER_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        getOneUserActionEnded: true,
      }
    }
    case OPERATIONS.ONE_USER_STARTED: {
      return {
        ...state,
        getOneUserActionEnded: false,
      }
    }
    case OPERATIONS.ONE_USER_FAILED: {
      return {
        ...state,
        getOneUserActionEnded: false,
        getOneUserError: action.payload.getOneUserError,
      }
    }
    case OPERATIONS.UPDATE_USER_SUCCEEDED: {
      return {
        ...state,
        // data: action.payload.data,
        updateUserActionEnded: true,
      }
    }
    case OPERATIONS.UPDATE_USER_STARTED: {
      return {
        ...state,
        updateUserActionEnded: false,
      }
    }
    case OPERATIONS.UPDATE_USER_FAILED: {
      console.log(action.payload.updateUserError);
      return {
        ...state,
        updateUserActionEnded: false,
        updateUserError: action.payload.updateUserError,
      }
    }
    case OPERATIONS.ALL_TRAINERS_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        getAllTrainersActionEnded: true,
      }
    }
    case OPERATIONS.ALL_TRAINERS_STARTED: {
      return {
        ...state,
        getAllTrainersActionEnded: false,
      }
    }
    case OPERATIONS.ALL_TRAINERS_FAILED: {
      console.log(action.payload.getAllTrainersError);
      return {
        ...state,
        getAllTrainersActionEnded: false,
        getAllTrainersError: action.payload.getAllTrainersError,
      }
    }
    case OPERATIONS.ALL_EQUIPMENT_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        getAllEquipmentActionEnded: true,
      }
    }
    case OPERATIONS.ALL_TRAINALL_EQUIPMENT_STARTEDERS_STARTED: {
      return {
        ...state,
        getAllEquipmentActionEnded: false,
      }
    }
    case OPERATIONS.ALL_EQUIPMENT_FAILED: {
      console.log(action.payload.getAllEquipmentError);
      return {
        ...state,
        getAllEquipmentActionEnded: false,
        getAllEquipmentError: action.payload.getAllEquipmentError,
      }
    }
    case OPERATIONS.ALL_WORKOUTS_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        getAllWorkoutsActionEnded: true,
      }
    }
    case OPERATIONS.ALL_WORKOUTS_STARTED: {
      return {
        ...state,
        getAllWorkoutsActionEnded: false,
      }
    }
    case OPERATIONS.ALL_WORKOUTS_FAILED: {
      console.log(action.payload.getAllWorkoutsError);
      return {
        ...state,
        getAllWorkoutsActionEnded: false,
        getAllWorkoutsError: action.payload.getAllWorkoutsError,
      }
    }
    case OPERATIONS.ALL_DIETS_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        getAllDietsActionEnded: true,
      }
    }
    case OPERATIONS.ALL_DIETS_STARTED:
      {
        return {
          ...state,
          getAllDietsActionEnded: false,
        }
      }
    case OPERATIONS.ALL_DIETS_FAILED: {
      console.log(action.payload.getAllDietsError);
      return {
        ...state,
        getAllDietsActionEnded: false,
        getAllDietsError: action.payload.getAllDietsError,
      }
    }
    case OPERATIONS.ADD_WORKOUT_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        addWorkoutActionEnded: true,
      }
    }
    case OPERATIONS.ADD_WORKOUT_STARTED:
      {
        return {
          ...state,
          addWorkoutActionEnded: false,
        }
      }
    case OPERATIONS.ADD_WORKOUT_FAILED: {
      console.log(action.payload.addWorkoutError);
      return {
        ...state,
        addWorkoutActionEnded: false,
        addWorkoutError: action.payload.addWorkoutError,
      }
    }
    case OPERATIONS.ADD_DIET_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        addDietActionEnded: true,
      }
    }
    case OPERATIONS.ADD_DIET_STARTED:
      {
        return {
          ...state,
          addDietActionEnded: false,
        }
      }
    case OPERATIONS.ADD_DIET_FAILED: {
      console.log(action.payload.addDietError);
      return {
        ...state,
        addDietActionEnded: false,
        addDietError: action.payload.addDietError,
      }
    }
    case OPERATIONS.ADD_EQUIPMENT_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        addEquipmentActionEnded: true,
      }
    }
    case OPERATIONS.ADD_EQUIPMENT_STARTED:
      {
        return {
          ...state,
          addEquipmentActionEnded: false,
        }
      }
    case OPERATIONS.ADD_EQUIPMENT_FAILED: {
      console.log(action.payload.addEquipmentError);
      return {
        ...state,
        addEquipmentActionEnded: false,
        addEquipmentError: action.payload.addEquipmentError,
      }
    }
    case OPERATIONS.ADD_TRAINER_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data,
        addTrainerActionEnded: true,
      }
    }
    case OPERATIONS.ADD_TRAINER_STARTED:
      {
        return {
          ...state,
          addTrainerActionEnded: false,
        }
      }
    case OPERATIONS.ADD_TRAINER_FAILED: {
      console.log(action.payload.addTrainerError);
      return {
        ...state,
        addTrainerActionEnded: false,
        addTrainerError: action.payload.addTrainerError,
      }
    }
    case INSIDE.DARK_MODE: {
      console.log(action.payload.setdarkmode);
      return {
        ...state,
        setdarkmode: action.payload.setdarkmode,
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;