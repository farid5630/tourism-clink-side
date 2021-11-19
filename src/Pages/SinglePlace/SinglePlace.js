import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SinglePlace = () => {
    const {placeId} = useParams();
    const [place, setPlace] = useState({});
    const { register, handleSubmit, reset} = useForm();
    const {user} = useAuth();

    useEffect( ()=> {
        fetch(`https://thawing-sierra-26157.herokuapp.com/services/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data));
    }, [] )

    // order post method

    const onSubmit = data => {
        fetch('https://thawing-sierra-26157.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Successfully');
                    reset('');
                }
            })
    };


    return (
        <div className="mb-5 container">
            <div className="row">
                <div className="col-md-6 col sm-12">
                    <img src={place?.img} className="w-100 " alt="" />
                        <br />
                    <div className="m-auto py-3">
                        <h2>Details of - {place?.name}</h2><br />
                        <h4><span className="text-info">Description:</span> {place?.description}</h4><br />

                        <h3>Starting form $<span className="text-info">{place?.price}</span></h3>
                    </div>
                </div>


                <div className="col-md-6 col sm-12">

                    <div className="w-100 d-flex justify-content-center">
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                            <input className="form-control" defaultValue={user?.displayName} {...register("name")} />

                            <input className="form-control" defaultValue={user?.email} {...register("email", { required: true })} />
                            {/* {errors.email && <span className="error">This field is required</span>} */}
                            <input className="form-control" placeholder="sport" defaultValue={place?.name} {...register("place")} />

                            <input className="form-control" placeholder="image link" defaultValue={place?.img} {...register("image")} />

                            <input className="form-control" placeholder="price" defaultValue={place?.price} {...register("price")} />

                            <input className="form-control" placeholder="phone number" defaultValue="" {...register("phone")} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>    
            
            
        </div>
    );
};

export default SinglePlace;