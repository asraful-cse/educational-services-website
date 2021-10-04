import React from 'react';

const HomeServices = (props) => {
    const { img, name, title, level, Vlength, enroll, rating, subject, } = props.service;
    return (

        <div className="col container">
            <div className="card">
                <img src={img} alt="" className="card-img-top img-fluid w-50  rounded " alt="..." />
                <div class="card-body">
                    <h3>{name}</h3>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{Vlength}</p>
                </div>
            </div>
        </div>


    );
};

export default HomeServices;