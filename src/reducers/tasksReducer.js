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
        default:
            return state;
    }
}