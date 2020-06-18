import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR
} from '../types';

// create new tasks
export function createTaskAction(task) {
    return (dispatch) => {
        dispatch(addTask());
        try {
            dispatch(addTaskSuccess(task));
        } catch (error) {
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