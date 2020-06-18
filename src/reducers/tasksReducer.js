import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_ERROR
} from '../types';

// each reducer has its own state
const initialState = {
    tasks: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
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
        default:
            return state;
    }
}