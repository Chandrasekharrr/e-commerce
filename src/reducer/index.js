import {combineReducers} from 'redux';
import post from './post/index';
import singlePost from './singlePost/index'

export default combineReducers({
    post,
    singlePost
});