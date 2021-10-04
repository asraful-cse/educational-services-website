import React from 'react';

const MoreServices = (props) => {
    console.log(props.more);
    const { img, name, title, level, Vlength, enroll, rating, subject, } = props.more;
    return (
     
            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top img-fluid" alt="..."/>
                    <div class ="card-body">
                    <h5 class ="card-title">{name}</h5>
                    <p class ="card-text"></p>
                    </div>
                </div>
            </div>
    );
};

export default MoreServices;