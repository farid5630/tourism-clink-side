import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        
          <div className="banner-container">
            <div className="">
                <div className="row d-flex banner  align-items-center justify-content-center">
                    <div className="col-md-6 ps-5">
                        <h1 className="title text-light" style={{fontSize:'65px', fontWeight:'900'}}>
                          LUXURY JOURNEYS
                        </h1>
                        <p className="text-white text-conter mt-3">CRAFTING INDVIDUAL AND UNIQUE ITINERARIES TO EVERY CORNER OF JAPAN.</p>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
           </div>
        
    );
};

export default Banner;