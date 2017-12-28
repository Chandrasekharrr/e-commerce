import React from 'react';

const Single = ({data}) => {
    return(
        <div className="singlePage">
            <div className="nengah">
                <div className="gambar">
                    <img src={data.imgSrc}/>
                </div>
                <div className="description">
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Single;