import React from 'react';

const ContentPreview = ({data, getDataContent}) => {
    var handleClick = () => {
        getDataContent(data.id)
    }

    return (
        <div className="col s12 m6 l3">
            <div className="card small" style={{cursor: 'pointer'}}
                onClick={handleClick}>
                <div className="card-image">
                    <img src={data.imageSrc} />
                    <span className="card-title"> {data.title} </span>
                </div>
                <div className="card-content">
                    <p> {data.description} </p>
                </div>
                <div className="card-action">
                    <a className="fa fa-heart"></a>
                    <a className="fa fa-shopping-cart"></a>
                </div>
            </div>
        </div>
    )
}

export default ContentPreview;