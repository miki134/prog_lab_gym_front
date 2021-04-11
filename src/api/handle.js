import axios from 'axios';
import { BASE_API_URL, ENDPOINTS } from './constants.js';

const request = async (endpoint, data, token = '', method = 'POST') => {
    console.log(data);
    const url = BASE_API_URL + endpoint;
    const response = await axios({
        method: `${method}`,
        url: `${url}`,
        headers: { 'Authorization': `Bearer ${token}` },
        data: JSON.stringify(data),
    });
    console.log(response);
    return response.data;
}

const register = async (name, surname, email, password) => {
    return await request(ENDPOINTS.REGISTER, {
        name,
        surname,
        email,
        password,
    });
};

const login = async (email, password) => {
    return await request(ENDPOINTS.LOGIN, {
        email,
        password,
    });
};

const getAllUsers = async (token) => {
    return await request(ENDPOINTS.GET_USERS,{}, token)
}

const getOneUser = async (token) => {
    console.log(token);
    return await request(ENDPOINTS.GET_USER,{}, token)
}


const updateUser = async (token, name, surname, email, password, role) => {
    return await request(ENDPOINTS.UPDATE_USER,{
        name,
        surname,
        email,
        password,
        role,
    }, token)
}

const getAllTrainers = async () => {
    return await request(ENDPOINTS.GET_TRAINERS,{})
}

const getAllEquipment = async () => {
    return await request(ENDPOINTS.GET_EQUIPMENT,{})
}

const getAllWorkouts = async () => {
    return await request(ENDPOINTS.GET_WORKOUTS,{})
}

const getAllDiets = async () => {
    return await request(ENDPOINTS.GET_DIETS,{})
}

const addWorkout = async (token, name, lengthOfTime, quantityOfExercises, difficulty, description) => {
    return await request(ENDPOINTS.ADD_WORKOUT,{
        name,
        lengthOfTime,
        quantityOfExercises,
        difficulty,
        description,
    }, token)
}


const addDiet = async (token, name, quantityOfProducts, numberOfMealsPerDay, meat, description) => {
    return await request(ENDPOINTS.ADD_DIET,{
        name,
        quantityOfProducts,
        numberOfMealsPerDay,
        meat,
        description,
    }, token)
}

const api = {
    register,
    login,
    getAllUsers,
    getOneUser,
    updateUser,
    getAllTrainers,
    getAllEquipment,
    getAllWorkouts,
    getAllDiets,
    addWorkout,
    addDiet,
};

export default api;

// export const  handleFormSubmit = async (_data, path, _method = 'post') => {
//     // e.preventDefault();
//     let res;
//     try {
//         res = axios({
//             method: `${_method}`,
//             url: `${path}`,
//             headers: { 'Authorization': `Bearer ${_data.JWT}`},
//             data: _data,
//           });
//             // .then(result => {
//             //   this.changeState(result.data, path);
//             // })
//             // .catch(error => this.setState({ error: error.message }));
//     //     const res = await fetch(path, {
//     //         headers: {
//     //           'Authorization': `Bearer ${_data.JWT}`
//     //         }
//     //       });
//     //       const timeStamp = await res.text();
//     //       console.log(timeStamp);
//     } catch (error) {
//         console.log(error);
//     }

// //         .then(result => {
// //             res = result;
// //         // this.changeState(result.data, path);
// //         })
// //         .catch(error => this.setState({ error: error.message }));
// // // 
//         return res;
//     };