import React from 'react';
import {connect} from 'react-redux';
// Components
import ContentPreview from './ContentPreview';
import { setCurrentPost } from '../../reducer/singlePost/actions';

const ContentList = ({post, singlePost}) => {
    return (
        Object.keys(post).map((e) =>
            <div className="row" onClick={singlePost(e._id)} key={e}>
                <ContentPreview data={post[e]} />
            </div>
        )
    )
}

const ContentListMap = ({post}) => ({post});
const mapDispatchToProps = dispatch => ({
    singlePost(id) {
        return () => {
            dispatch(setCurrentPost(id))
        }
    }
})

export default connect(ContentListMap, mapDispatchToProps)(ContentList)