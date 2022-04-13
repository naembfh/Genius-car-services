import React from 'react';
import catS from '../../../images/cat.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary ' style={{ textAlign: 'center' }}>Mechanic is Sleeping</h2>
            <img style={{ height: '600px', width: '1000px', marginLeft: '150px' }} src={catS} alt="" srcset="" />

        </div>
    );
};

export default NotFound;