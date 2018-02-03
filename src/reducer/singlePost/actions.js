export const SET_CURRENT_POST = 'SET_CURRENT_POST';

export function setCurrentPost(_id) {
    return {
        type: SET_CURRENT_POST,
        _id
    }
}