import React from 'react';
// Import components
import SingleContent from './SingleContent';

const Single = (props) => {
    return(
        <div className="single" id="single">
            <div className="container">
                <div className="col s12 m4 l8">
                    <div className="card" style={{width: '700px', margin: '0 auto'}}>
                        <div className="card-image">
                            <img src={props.imageSrc} style={{height: '500px'}} />
                            <span className="card-title"> {props.title} </span>
                        </div>
                    </div>
                </div>
            </div>
            <SingleContent data={props.description} />
        </div>
    )
}

export default Single;