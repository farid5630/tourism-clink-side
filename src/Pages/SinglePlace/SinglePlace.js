import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SinglePlace = () => {
    const {placeId} = useParams();
    const [place, setPlace] = useState()
    console.log(place);

    useEffect( ()=> {
        fetch(`https://thawing-sierra-26157.herokuapp.com/services/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, [] )
    return (
        <div className="mb-5">
                      
            <img src={place?.img} alt="" />
            <br />
           <div className="w-50 m-auto">
           <h2>Details of {place?.name}</h2><br />
            <h4>Description: {place?.description}</h4><br />

            <h3>Starting form ${place?.price}</h3>

            <Link to="/placeorder">
            <div className="btn btn-success">place-order</div></Link>
           </div>
            
        </div>
    );
};

export default SinglePlace;