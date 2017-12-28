import React from 'react';
// Import Components
import ContentPreview from './ContentPreview';

const Content = ({data, singlePage}) => {
    return (
        <div className="row" >
            {Object.keys(data).map((content) => {
                return <ContentPreview getDataContent={singlePage} data={data[content]} key={content} />
            })}
        </div>
    )
}

export default Content;
