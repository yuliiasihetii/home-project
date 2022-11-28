import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/product-cart.css'
import '../../../styles/index.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../../store/shopping/cartSlice.js'

const ProductCart = (props) => {
    const { id, title, image01, price } = props.item
    const displatch = useDispatch()

    const addToCart = () => {
        displatch(cartAction.addItem({
            id,
            title,
            image01,
            price
        }))
    }
    console.log()

    return (
        <div className='product-item'>
            <div className="product-img">
                <img src={image01} alt="" className='w-50' />
            </div>
            <div className="product-content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='product-cart-flex d-flex align-items-center justify-content-between'>
                    <span className='product-price'>${price}</span>
                    <button className='addToCart-btn' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCart