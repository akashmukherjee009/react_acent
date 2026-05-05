import React from 'react'
import './Card.css'
const Card = (props) => {
    
  return (
    <div className="card">
        <div className="card-header">Products</div>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
            Price: {props.price}
            </p>
            <a href="#" className="btn btn-primary">
            Buy
            </a>
        </div>
    </div>

  )
}

export default Card
