import React from 'react';

const Single = ({data}) => {
    return(
        <div className="container animate-balik">
            <div className="card large">
                <div className="card-image">
                    <img src={data.imageSrc} />
                    <span className="card-title"> {data.title} </span>
                </div>
                <div className="card-content">
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Single;