import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const contacts = {
        john: {
          email: 'john@gamil.com',
          phone: '+94771234567',
        },
        robert: {
          email: 'robert@gamil.com',
          phone: '+94771234567', 
        },
        jenny: {
          email: 'jenny@gamil.com',
          phone: '+94771234567', 
        },
    };

    const {id} = useParams();
    const info_object = contacts[id];

    if (!info_object) {
        return <p>No contact found for the given ID.</p>;
    }

    return (
        <div className='info'>
            <h4>Contact Information</h4>
            <p>Name: {id}</p>
            <p>Email: {info_object.email}</p>
            <p>Phone: {info_object.phone}</p>
        </div>
    );
}

export default Info;
