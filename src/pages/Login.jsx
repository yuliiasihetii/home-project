import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Link } from 'react-router-dom'


const Login = () => {
    const loginNameRef = useRef()
    const passwordRef = useRef()

    const submitHandler = e => {
        e.preventDefault()
    }
    return (
        <Helmet title='Login'>
            <CommonSection title='Login' />
            <section>
                <Container >
                    <Row>
                        <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                            <form action="" className="form mb-3" onClick={submitHandler}>
                                <div className='form-group'>
                                    <input type="email" placeholder='Email' required ref={loginNameRef} />
                                </div>
                                <div className='form-group'>
                                    <input type="password" placeholder='Password' required ref={passwordRef} />
                                </div>
                                <button type='submit' className='addToCart-btn'>Login</button>
                            </form>
                            <Link to='/register'>Already have an account? Create an account!</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login