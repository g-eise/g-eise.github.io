import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from './navigation';

const Credits = () => {
    return (
        <div>
            <Link to={HOME} >back</Link>
            credits
        </div>
    );
}

export default Credits;