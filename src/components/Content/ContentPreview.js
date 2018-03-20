import React from 'react';

const ContentPreview = ({data}) => {
    // Get content ID from data._id
    
    
    return (
        <div className="card">
            <div className="card-header-anim"></div>
            <div className="card-header">
                <div className="card-person">
                    {/* <img /> */}
                </div>
                <div className="card-img-content">
                    <img src={data.imageSrc} />
                </div>
            </div>
            <div className="card-content">
                <div className="card-title">{data.title}</div>
                <p>{data.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn"><i className="fa fa-shopping-cart"></i> BUY</button>
                <button className="btn" title="add to wish list"><i className="fa fa-heart-o"></i> WISH</button>
            </div>
        </div>
    )
}

export default ContentPreview;