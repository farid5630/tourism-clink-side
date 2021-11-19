import React from 'react';

const GetTouch = () => {
    return (
        <div>
            <h1>FEEL FREE TO GET IN <span className="text-success my-5">TOUCH</span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
            <textarea name="" id="" className="form-control bg-light my-3" cols="15" rows="5" placeholder="Your comments..."></textarea>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <input type="text" className="form-control w-100 bg-light" placeholder="Your Name" />
                </div>
                <div className="col-md-6 col-sm-12" >
                    <input type="email" className="form-control w-100 bg-light" placeholder="Your E-mail" />
                </div>
            </div>
            <button className="btn btn-success d-flex justify-content-start p-3 my-5">SEND MESSEGE</button>
        </div>
    );
};

export default GetTouch;