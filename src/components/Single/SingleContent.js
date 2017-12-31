import React from 'react';

const SingleContent = ({data}) => {
    return (
        <div className="card bawah z-depth-2">
            <div className="card-content">
                <p>{data}</p>
            </div>
        </div>
    )
}

export default SingleContent;