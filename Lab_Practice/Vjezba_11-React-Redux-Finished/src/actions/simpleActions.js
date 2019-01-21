import { SIMPLE_INCREMENT, SIMPLE_DECREMENT } from '../constants/actions';

export const simpleIncrementAction = (value) => dispatch => {
    dispatch({    
        type: SIMPLE_INCREMENT,
        payload: value,
    })
}

export const simpleDecrementAction = (value) => dispatch => {
    dispatch({    
        type: SIMPLE_DECREMENT,
        payload: value,
    })
}