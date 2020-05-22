import React from 'react';
import './warning.scss';

const Warning = ({text = ''}) => {
    return (
        <div className = 'warning'>
            {text}
        </div>
    )
}

export default Warning;
