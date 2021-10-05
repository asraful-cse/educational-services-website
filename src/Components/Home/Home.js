import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../HomeServices/HomeServices';
import skillUp from '../../image/skillUp.png'

const Home = () => {
    const [homeServices, SetHomeServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.JSON')
            .then(res => res.json())
            .then(data => SetHomeServices(data))
    }, [])
    return (
        <div className="container">
            {/* home service section */}
            <section  >
                <div className="d-flex justify-content-center" >
                    <img className="img-fluid" src={skillUp} alt="" />
                </div>
                <br />
                <div className="blog text-dark text-4">
                    <p >In today’s modern age of disruption, SkillUp Online is your ideal learning platform
                        that enables you to skill up to the most in-demand technology skills like Data Science,
                        Big Data, Artificial Intelligence, Cloud, Front-End Development, DevOps and many more.
                        In your journey of evolution as a technologist, SkillUp Online helps you work smarter,
                        get to your career goals faster and create an exciting technology led future.
                    </p>
                </div>
                <br />
                <Link className="badge  btn btn-outline-success text-dark text-wrap" style={{ width: '6rem', textDecoration: 'none' }} to="/services"> Click to all services</Link>
                <h2 className="text-dark text-center py-3">MOST POPULAR COURSES</h2>
            </section>
            {/* home services part */}
            <div class="row row-cols-1 row-cols-md-2 g-4 ">
                {
                    homeServices.slice(0, 4).map(service => <HomeServices key={service.key} service={service}></HomeServices>)
                }
            </div>
        </div>
    );
};

export default Home;