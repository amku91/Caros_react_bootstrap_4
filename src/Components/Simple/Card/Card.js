import React from 'react';

import './Card.css';

const Card = props => {
    return (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="{props.title}" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
        </div>
            );
        };
        
export default Card;