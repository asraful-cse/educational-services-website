import React from 'react';
import skillUp from '../../image/skillUp.png';
const Footer = () => {
    return (
        <div className="bg-light " style={{ textAlign: 'center', padding: '3px',
         backgroundColor: 'DarkSalmon', color: 'gray', borderTop:'1px solid lightGray',marginTop:'60px' }}>
            <div className="container" style={{ marginBottom: '12px', marginTop: "12px" }}>
                <img src={skillUp} alt="" />
                <br />
                <small>In today’s modern age of disruption, SkillUp Online is your
                    ideal learning platform that enables you to skill up to the
                    most in-demand technology skills like Data Science, Big Data,
                    Artificial Intelligence, Cloud, Front-End Development,
                    DevOps and many more. In your journey of evolution as a technologist,
                    SkillUp Online helps you work smarter, get to your career goals faster
                    and create an exciting technology led future.</small>
                <br />
                <div style={{ textDecoration: 'none' }}>
                    <small > <a href="https://skillup.online/">Copyright ©2021 Skillup. All Rights Reserved</a></small>
                </div>
            </div>
        </div>
    );
};

export default Footer;