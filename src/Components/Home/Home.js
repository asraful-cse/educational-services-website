import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../HomeServices/HomeServices';


const Home = () => {
    const [homeServices, SetHomeServices] = useState([]);
    useEffect(() => {
        fetch('./homeServicesData.JSON')
            .then(res => res.json())
            .then(data => SetHomeServices(data))
    }, [])
    return (
        <>
            <Link to="/services">SERVICES</Link>
            <div class=" container row row-cols-1 row-cols-md-2 g-4 ">
                {
                    homeServices.map(service => <HomeServices key={service.key} service={service}></HomeServices>)
                }
            </div>
        </>
    );
};

export default Home;