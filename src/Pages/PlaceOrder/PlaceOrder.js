import React from 'react';
// import { useForm } from 'react-hook-form';
// import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const {user} = useAuth();

    // const onSubmit = data => {
       

    //     fetch('https://thawing-sierra-26157.herokuapp.com/orders', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.insertedId) {
    //                 alert('Order processed Successfully');
    //                 reset('');
    //             }
    //         })
    // };
    return (
        <div className="w-100 d-flex justify-content-center">
        {/* <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

            <input className="form-control" defaultValue={user.displayName} {...register("name")} />

            <input className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input className="form-control" placeholder="City" defaultValue="" {...register("city")} />
            <input className="form-control" placeholder="Date" defaultValue="" {...register("date")} />
            <input className="form-control" placeholder="phone number" defaultValue="" {...register("phone")} />
            <input type="submit" />
        </form> */}
    </div>
    );
};

export default PlaceOrder;