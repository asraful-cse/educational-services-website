import React from 'react';
const HomeServices = (props) => {
    const { img, name, title, level, Vlength, price, enrolled, subject, facebook, instragram, twitter } = props.service;
    return (
        <div class="col ">
            <div style={{ width: '32rem', backgroundColor: "white", borderRadius: "0.5rem", color: '#176b85fa' }} className="card hoverer shadow m-3 text-center" >
                <img src={img} alt="" className="card-img-top img-fluid  rounded " />
                <div className="mt-2 py-1  justify-content-center d-flex " style={{ color: '#176b85fa' }}>
                    <div className="px-5" ><i class="fas fa-book-reader text-info"></i>  <small>{subject}</small></div>
                    <div className="px-5" ><i class="fas fa-layer-group"></i>  <small>{level}</small></div>
                    <div className="px-5"> <i class="fas fa-users-cog text-info"></i>  <small>{enrolled} Enrolled</small></div>
                </div>
                <div class="card-body">
                    <h3>{name}</h3>
                    <p className="card-title ">{title}</p>
                    <h4><i class="fas fa-dollar-sign text-primary"></i>  {price}</h4>
                    <p className="card-text"><i className="fas fa-video text-success"> </i> Daily :  {Vlength}</p>
                </div>
                {/* Social Link Section */}
                <div className="mt-1 py-1  justify-content-center d-flex ">
                    <div className="px-4">
                        <a href={facebook}> <i className="fab fa-facebook-square" style={{ fontSize: "30px", color: "#1771E6" }}></i></a>
                    </div>
                    <div className="px-4">
                        <a href={instragram}><i className="fab fa-instagram-square" style={{ fontSize: "30px", color: "#FF0000" }}></i></a>
                    </div>
                    <div className="px-4">
                        <a href={twitter}><i className="fab fa-twitter-square" style={{ fontSize: "30px", color: "#1DA1F2" }}></i></a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HomeServices;