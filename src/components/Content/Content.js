import React from 'react';

const Content = ({data}) => {
    var ContentCard = data.map((content) => (
        <div key={content.id} className="col s12 m6 l3">
            <div className="card small">
                <div className="card-image">
                    <img src={content.imageSrc} />
                    <span className="card-title"> {content.title} </span>
                </div>
                <div className="card-content">
                    <p> {content.description} </p>
                </div>
                <div className="card-action">
                    <a className="fa fa-heart"></a>
                    <a className="fa fa-shopping-cart"></a>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="row">
            {ContentCard}
        </div>
    )
}

export default Content;
