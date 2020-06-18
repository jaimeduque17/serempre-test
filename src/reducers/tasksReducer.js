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

// each reducer has its own state
const initialState = {
    tasks: [],
    error: null,
    loading: false,
    deletetask: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
        case START_DOWNLOAD_TASKS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: [...state.tasks, action.payload]
            }
        case ADD_TASK_ERROR:
        case DOWNLOAD_TASKS_ERROR:
        case GET_TASK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: action.payload
            }
        case GET_TASK_DELETE:
            return {
                ...state,
                deletetask: action.payload
            }
        case GET_TASK_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter( task => task.id !== state.deletetask),
                deletetask: null
            }
        default:
            return state;
    }
}