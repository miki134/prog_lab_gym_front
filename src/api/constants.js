export const BASE_API_URL = 'http://localhost/repos/gym/api/'

export const ENDPOINTS = {  
    REGISTER: 'users/create.php',
    LOGIN: 'users/login.php',

    GET_ONE_USER: 'users/read_one.php',
    GET_USERS: 'users/read_all_users.php',
    GET_USER: 'users/read_one.php',
    UPDATE_USER: 'users/update.php',
    DELETE_USER: 'users/delete.php',
    
    GET_TRAINERS: 'trainers/read_all_trainers.php',
    ADD_TRAINER: 'trainers/create.php',

    GET_EQUIPMENT: 'equipment/read_all_equipment.php',
    ADD_EQUIPMENT: 'equipment/create.php',

    GET_WORKOUTS: 'workouts/read_all_workouts.php',
    ADD_WORKOUT: 'workouts/create.php',

    GET_DIETS: 'diets/read_all_diets.php',
    ADD_DIET: 'diets/create.php',
};