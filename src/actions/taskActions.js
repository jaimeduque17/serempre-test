import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR
} from '../types';
import axiosClient from '../config/axios';

// create new tasks
export function createTaskAction(task) {
    return async (dispatch) => {
        dispatch(addTask());
        try {
            // insert in the API
            await axiosClient.post('tasks', task);

            // update the state if all gonna be okay
            dispatch(addTaskSuccess(task));
        } catch (error) {
            console.log(error);

            // if there is an error change the state
            dispatch(addTaskError(true));
        }
    }
}

const addTask = () => ({
    type: ADD_TASK,
    payload: true
});

// if the product is saved in the DB
const addTaskSuccess = (task) => ({
    type: ADD_TASK_SUCCESS,
    payload: task
});

// if there was an error
const addTaskError = (state) => ({
    type: ADD_TASK_ERROR,
    payload: state
});