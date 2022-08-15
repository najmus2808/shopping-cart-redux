import { ADD, INCREMENT, DECREMENT } from './actionTypes';

export const add = (id) => {
    return {
        type: ADD,
        payload: { id }
    }
}

export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: { id }
    }
}

export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: { id }

    }
}