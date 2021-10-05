import React from 'react';
const SignIn = () => {
    return (
        <>
            <form className="container w-50" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <h4 className="text-center text-dark">Please Registration now</h4>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label text-dark">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Valid Email"></input>
                    <div id="emailHelp" class="form-text text-dark">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label text-dark"  >Password</label>
                    <input type="password" className="form-control" placeholder="Your Password" id="exampleInputPassword1"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label text-dark" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default SignIn;