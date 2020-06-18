import Swal from 'sweetalert2';
import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR,
    START_DOWNLOAD_TASKS,
    DOWNLOAD_TASKS_SUCCESS,
    DOWNLOAD_TASKS_ERROR,
    GET_TASK_DELETE,
    GET_TASK_SUCCESS,
    GET_TASK_ERROR
} from '../types';
import axiosClient from '../config/axios';

// create new tasks
export function createTaskAction(task) {
    return async (dispatch) => {
        dispatch(addTask());
        try {
            // insert in the API
            await axiosClient.post('/tasks', task);

            // update the state if all gonna be okay
            dispatch(addTaskSuccess(task));

            // success alert
            Swal.fire(
                'Correcto',
                'La tarea se agregó correctamente',
                'success'
            );

        } catch (error) {
            console.log(error);

            // if there is an error change the state
            dispatch(addTaskError(true));

            // error alert
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            });
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

// function to download the tasks of the DB
export function getTasksAction() {
    return async (dispatch) => {
        dispatch(downloadTasks());
        try {
            const response = await axiosClient.get('/tasks');
            dispatch(downloadTasksSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(downloadTasksError());   
        }
    }
}

const downloadTasks = () => ({
    type: START_DOWNLOAD_TASKS,
    payload: true
});

const downloadTasksSuccess = (tasks) => ({
    type: DOWNLOAD_TASKS_SUCCESS,
    payload: tasks
});

const downloadTasksError = () => ({
    type: DOWNLOAD_TASKS_ERROR,
    payload: true
});

// select and delete the task
export function deleteTaskAction(id) {
    return async (dispatch) => {
        dispatch(getTaskDelete(id));
    }
}

const getTaskDelete = (id) => ({
    type: GET_TASK_DELETE,
    payload: id
});