import React from 'react';
import {connect} from 'react-redux';
// Import Components
import ContentPreview from './ContentPreview';

const Content = ({post}) => {
    return (
        <div className="row" >
            {post.map(e =>
                <ContentPreview data={e} key={e._id}/>
            )}
        </div>
    )
}

const ContentMap = ({post}) => ({post})

export default connect(ContentMap)(Content);
