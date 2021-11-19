// import { Container, Table, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    
    const [allOrders, setAllOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect( () => {
        fetch('https://thawing-sierra-26157.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    }, [control]);

    // delete option
    const handleCicleDelete = (id) => {
        fetch(`https://thawing-sierra-26157.herokuapp.com/allOrders/${id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                setControl(!control);
            } 
        })
    }

    return (
        <div className="container">
            <h1> Manage All Orders : {allOrders?.length}</h1>

            <table style={{border:"1px solid black", margin:"auto"}} className="my-5">
                <thead style={{border:"1px solid black"}}>
                    <tr>
                        <th style={{border:"1px solid black", padding:"10px"}}>#</th>
                        <th style={{border:"1px solid black", padding:"10px"}}>Name</th>
                        <th style={{border:"1px solid black", padding:"10px"}}>E-mail</th>
                        <th style={{border:"1px solid black", padding:"10px"}}>Place Name</th>
                        <th style={{border:"1px solid black", padding:"10px"}}>Cost</th>
                        <th style={{border:"1px solid black", padding:"10px"}}>Image Link</th>
                        <th style={{border:"1px solid black", padding:"10px"}}>phone</th>
                        <th style={{border:"1px solid black", padding:"10px"}}>Action</th>
                    </tr>
                </thead>
                {allOrders?.map((orders, index) => (
                    <tbody>
                        <tr>
                            <td style={{border:"1px solid black", padding:"10px"}}>{index}</td>
                            <td style={{border:"1px solid black", padding:"10px"}}>{orders?.name}</td>
                            <td style={{border:"1px solid black", padding:"10px"}}>{orders?.email}</td>
                            <td style={{border:"1px solid black", padding:"10px"}}>{orders?.place}</td>
                            <td style={{border:"1px solid black", padding:"10px"}}>{orders?.price}</td>
                            <td style={{border:"1px solid black", padding:"10px"}}>{orders?.image}</td>
                            <td style={{border:"1px solid black", padding:"10px"}}>{orders?.phone}</td>
                            <button onClick={()=> handleCicleDelete(orders?._id)} className="btn btn-danger mt-3">Delete</button>
                        </tr>
                    </tbody> 
                ))}
            </table>
        </div>
    );
};

export default ManageOrders;