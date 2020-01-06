import React from 'react';
import './Progress.scss';

const Progress = (props) => {
    return (
        <>
            <div className={`progress-bar ${props.className}`} style={{ width: props.w, height: props.h }}>
                <div className='progress-bar--filler' style={{ width: `${props.loaded}%` }}></div>
            </div>
        </>
    )
}
export default Progress;