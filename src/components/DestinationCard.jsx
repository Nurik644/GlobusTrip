import React from 'react';
import './destination.css';

function DestinationCard({ name, description, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default DestinationCard;
