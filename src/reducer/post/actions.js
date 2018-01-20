export const POST_DATA = 'POST_DATA';

export function getDataPost() {
    return dispatch => {
        fetch('/api')
            .then(resp => resp.json())
            .then(function({post}) {return dispatch(setDataPost(post))})
    }
}

export function setDataPost(post) {
    return {
        type: POST_DATA,
        post
    }
}