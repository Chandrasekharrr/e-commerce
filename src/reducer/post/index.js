import {POST_DATA} from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_DATA:
            // console.log(action)
            return action.post;
        default:
            return state;
    }
}