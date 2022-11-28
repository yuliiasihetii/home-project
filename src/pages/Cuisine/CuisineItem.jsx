import React from 'react'
import { Link } from 'react-router-dom'

function CuisineItem({ item }) {
    return (
        <div className='cuisine-card' >
            <Link to={'/recipe/' + item.id}>
                <img src={item.image} alt='' />
                <h4>{item.title}</h4>
            </Link>

        </div>
    )
}

export default CuisineItem