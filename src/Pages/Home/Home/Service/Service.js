import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, id } = service
    const navigate = useNavigate()
    const navigateToserviceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service shadow-lg p-2'>
            <img src={img} alt="" srcset="" />
            <h1>{name}</h1>
            <p>Price : {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToserviceDetail(id)} className='btn btn-primary'>Book :{name}</button>
        </div>
    );
};

export default Service;