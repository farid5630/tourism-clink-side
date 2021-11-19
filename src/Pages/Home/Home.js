import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import GetTouch from './GetTouch/GetTouch';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://thawing-sierra-26157.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
            <Banner></Banner>
            <br />
            <Container className="my-5">
                <h1 className="my-3 m-auto">Our Visit Sport</h1>
            <div className="row">
                    {
                        services?.map((service) => ( 
                            
                            <div className="col-md-4 col-sm-6 mb-4">
                                
                                <div className="cart h-100 bg-light shadow-lg pb-2">
                                    <div className="cart-details">
                                        <img className="w-100" height="200px" src={service.img} alt="" />
                                    </div>
                                    <div className="text-area p-2 pt-4">
                                        <h4>{service.name}</h4>
                                        <p>{service.description}</p>
                                        <h6>Starting From <span className="text-danger" >$ </span>{service.price}</h6>
                                    </div>  
                                    <Link to={`/booknow/${service._id} `}>
                                        <button className="btn btn-primary">Book Now</button>
                                    </Link>               
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Testimonial></Testimonial>
                <GetTouch></GetTouch>
            </Container>
            
        </div>
    );
};

export default Home;