import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../HomeServices/HomeServices';
import skillUp from '../../image/skillUp.png'

const Home = () => {
    const [homeServices, SetHomeServices] = useState([]);
    useEffect(() => {
        fetch('./homeServicesData.JSON')
            .then(res => res.json())
            .then(data => SetHomeServices(data))
    }, [])
    return (
        <div className="container">
            {/* home service section */}
            <section  >
                <div className="bg-light" >
                    <img className="img-fluid" src={skillUp} alt="" />
                </div>
                <br />
                <div className="blog text-light">
                    <strong>In today’s modern age of disruption, SkillUp Online is your ideal learning platform that enables you to upskill to the most in-demand technology skills like Data Science, Big Data, Artificial Intelligence, Cloud, Front-End Development, DevOps & many more. In your journey of evolution as a technologist, SkillUp Online helps you work smarter, get to your career goals faster and create an exciting technology led future.</strong>
                </div>
                <br />
                <Link className="badge bg-primary text-wrap" style={{ width: '6rem', textDecoration: 'none' }} to="/services"> Click to all services</Link>
                <h2 className="text-light text-center py-3">MOST POPULAR COURSES</h2>
            </section>
            {/* home services part */}
            <div class="row row-cols-1 row-cols-md-2 g-4 ">
                {
                    homeServices.map(service => <HomeServices key={service.key} service={service}></HomeServices>)
                }
            </div>
        </div>
    );
};

export default Home;