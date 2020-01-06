import React from 'react';

const Image = (props) => {
    return (
        <div className='img'>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}
export default Image