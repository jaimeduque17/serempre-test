import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR
} from '../types';

// create new tasks
export function createTaskAction() {
    return () => {
        console.log('from action');
    }
}