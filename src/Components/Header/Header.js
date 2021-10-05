import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-expand-md navbar-expand-sm " style={{ backgroundColor: '#fdfdff75' }}>
                <div className="container-fluid container ">
                    <img className="img-fluid w-10" src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <form className="d-flex " style={{ marginLeft: '100px' }}>
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <div className="navbar-nav me-auto mb-2 mb-lg-0 hover:success" style={{ marginLeft: '60px', Color: 'yellow', marginRight: '0px' }} >
                            <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "rgb(3 185 124)" }} style={{ textAlign: 'center', textDecoration: 'none', marginLeft: '15px', fontWeight: '700' }}>HOME</NavLink>
                            <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "rgb(3 185 124)" }} style={{ textAlign: 'center', textDecoration: 'none', marginLeft: '15px', fontWeight: '700' }}>ABOUT</NavLink>
                            <NavLink to="/services" activeStyle={{ fontWeight: "bold", color: "rgb(3 185 124)" }} style={{ textAlign: 'center', textDecoration: 'none', marginLeft: '15px', fontWeight: '700' }}>SERVICES</NavLink>
                            <NavLink to="/login" activeStyle={{ fontWeight: "bold", color: "rgb(3 185 124)" }} style={{ textAlign: 'center', textDecoration: 'none', marginLeft: '15px', fontWeight: '700' }}>LOGIN</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="header" style={{  marginBottom:'60px',marginTop:'60px' }}>
                <h1 class="text-center" style={{  color: 'rgb(67 118 20)' ,marginBottom:'0' }}> "ONLINE SKILL UP EDUCATIONAL PLATFORM"</h1>

            </div>
        </>
    );
};

export default Header;
