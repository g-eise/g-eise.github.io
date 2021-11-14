import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from './navigation';

const Bibliography = () => {
    return (
        <div>
            <Link to={HOME} >back</Link>
            Bibliography
        </div>
    );
}

export default Bibliography;