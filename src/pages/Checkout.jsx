import React, { useState } from 'react'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet.js'
import CommonSection from '../components/UI/common-section/CommonSection'

const Checkout = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [userCountry, setUserCountry] = useState('')
    const [userCity, setUserCity] = useState('')
    const [userCode, setUserCode] = useState('')

    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const shippingCost = 30

    const totalAmount = cartTotalAmount + Number(shippingCost)

    const submitHandler = (e) => {
        e.preventDefault()

        const userShippingAddress = {
            name: userName,
            email: userEmail,
            phone: userNumber,
            country: userCountry,
            city: userCity,
            postalCode: userCode,
        }
    }
    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8' md='6'>
                            <h6 className='mb-4'>Shipping Address</h6>
                            <form action="" className="checkout-form" onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text" placeholder='Enter your name' required onChange={e => setUserName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder='Enter your email' required onChange={e => setUserEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder='Phone number' required onChange={e => setUserNumber(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder='Country' required onChange={e => setUserCountry(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder='City' required onChange={e => setUserCity(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder='Postal code' required onChange={e => setUserCode(e.target.value)} />
                                </div>
                                <button className='addToCart-btn'>Payment</button>
                            </form>

                        </Col>
                        <Col lg='4' md='6'>
                            <div className='checkout-bill'>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotalAmount}</span></h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping: <span>${shippingCost}</span></h6>
                                <div className='checkout-total'>
                                    <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout