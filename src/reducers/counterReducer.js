import { INCREMENT, DECREMENT } from '../actions/counterActions'

const initialState = {
	counter: 20
};
export const counterReducer = (state = initialState, action) => {
	const newState = { ...state };

	switch (action.type) {
		case INCREMENT:
            return {
		    	counter: newState.counter+1
            }
		case DECREMENT:
            return {
			    counter: newState.counter-1
            }
        default: 
            return state
    }
};
