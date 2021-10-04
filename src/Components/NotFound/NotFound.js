import React from 'react';
import img from '../../image/404.jpg'
const NotFound = () => {
    return (
        <div className="container">
            <img className="img-fluid w-80  rounded " src={img} alt="" />
        </div>
    );
};

export default NotFound;