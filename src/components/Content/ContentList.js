import React from 'react';
// Import Components
import ContentPreview from './ContentPreview';

const Content = ({data, singlePage}) => {
    return (
        <div className="row" >
            {data.map((content) => {
                return <ContentPreview getDataContent={singlePage} data={content} key={content.id} />
            })}
        </div>
    )
}

export default Content;
