import { SIMPLE_INCREMENT } from '../constants/actions';
import { SIMPLE_DECREMENT } from '../constants/actions';

const initialState = {
    currentValue: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIMPLE_INCREMENT:
            {
                return {
                    ...state,
                    currentValue: state.currentValue + action.payload
                }
            }
            case SIMPLE_DECREMENT:
            {
                return {
                    ...state,
                    currentValue: state.currentValue - action.payload
                }
            }
        default:
        // Pazit na default return
            return state;
    }
}