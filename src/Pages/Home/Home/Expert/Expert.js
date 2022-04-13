import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img } = expert
    return (
        <div className='gx-5 gy-5 rounded-5 shadow-lg col-sm-12 col-md-6 col-lg-4'>
            <div class="card p-2 hover-zoom" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Book Me</a>
                </div>
            </div>

        </div>

    );
};

export default Expert;