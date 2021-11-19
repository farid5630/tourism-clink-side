import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);
    const {user} = useAuth();
    const email = user?.email;
    useEffect(()=> {
        fetch(`https://thawing-sierra-26157.herokuapp.com/myOrders/${email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [control] )

    // delect msthod
    const handleDelete = (id) => {
        fetch(`https://thawing-sierra-26157.herokuapp.com/cancel/${id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert('Order cancel successfully')
                setControl(!control);
            } 
        })
    }
    return (
        <div>
            <h1>My All Orders : {myOrders.length}</h1>
            <div className="row container">
                {
                    myOrders.map(order => (
                    <div  key={order._id} className="col-md-4 col-sm-6 col-12  my-3">
                       
                        <div className="cart h-100 bg-light shadow-lg pb-2">
                            <div className="cart-details">
                                <img className="w-100" height="200px" src={order?.image} alt="placeImage" />
                            </div>
                            <div className="text-area p-2 pt-4">
                                <h3>{order?.name}</h3>
                                <h4>{order?.place}</h4>
                                <p>{order?.description}</p>
                                <h6>Starting From <span className="text-danger" >$ </span>{order?.price}</h6>
                            </div>  
                            <button onClick={()=>handleDelete(order._id)} className="btn btn-danger">Cancel</button>              
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyOrders;