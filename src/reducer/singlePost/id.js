import { SET_CURRENT_POST } from './actions';

const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_POST :
            action._id;
            console.log(action)
            break;
        default:
            return state;
    }
}