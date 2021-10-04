import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                 <Link to="/">Home</Link>
        //                 <Link to="/about">About</Link>
        //                 <Link to="/services">Services</Link>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                       <Link to="/services">SERVICES</Link>
                       <Link to="/sign_in">SIGN IN</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;