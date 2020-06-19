import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR,
    START_DOWNLOAD_TASKS,
    DOWNLOAD_TASKS_SUCCESS,
    DOWNLOAD_TASKS_ERROR,
    GET_TASK_DELETE,
    TASK_DELETED_SUCCESS,
    TASK_DELETED_ERROR,
    GET_TASK_EDIT,
    TASK_EDITED_SUCCESS,
    TASK_EDITED_ERROR
} from '../types';

// each reducer has its own state
const initialState = {
    tasks: [],
    error: null,
    loading: false,
    deletetask: null,
    edittask: null
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
        case TASK_DELETED_ERROR:
        case TASK_EDITED_ERROR:
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
        case TASK_DELETED_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter( task => task.id !== state.deletetask),
                deletetask: null
            }
        case GET_TASK_EDIT:
            return {
                ...state,
                edittask: action.payload
            }
        case TASK_EDITED_SUCCESS:
            return {
                ...state,
                edittask: null,
                tasks: state.tasks.map(task => task.id === action.payload ? task = action.payload : task)
            }
        default:
            return state;
    }
}