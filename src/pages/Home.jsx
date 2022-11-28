import React, { useEffect, useState } from 'react'

import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import '../styles/index.css'
import '../styles/hero-section.css'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Category from '../components/UI/category/Category.jsx'
import serviceImg01 from '../assets/images/service-01.png'
import serviceImg02 from '../assets/images/service-02.png'
import serviceImg03 from '../assets/images/service-03.png'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import networkImg from '../assets/images/network.png'
import whyImg from '../assets/images/location.png'
import ProductCart from '../components/UI/producr-cart/ProductCart.jsx'
import Products from '../assets/fake-data/products.js'
import TestimonialSlider from '../components/slider/TestimonialSlider.jsx'

const featureData = [
    {
        title: 'Quick Delivery',
        img: serviceImg01,
        decs: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nemo.'
    },
    {
        title: 'Super Dine In',
        img: serviceImg02,
        decs: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nemo.'
    },
    {
        title: 'Easy Pick Up',
        img: serviceImg03,
        decs: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nemo.'
    }
]

const Home = () => {


    const [allCategory, setAllCategory] = useState("ALL")
    const [products, setProducts] = useState(Products)
    const [hotPizza, setHotPizza] = useState([])

    useEffect(() => {
        const filteredPizza = Products.filter(item => item.category === "Pizza");
        const slicePizza = filteredPizza.slice(0, 4)
        setHotPizza(slicePizza)
    }, [])

    useEffect(() => {
        if (allCategory === "ALL") {
            setProducts(Products)
        }
        if (allCategory === "BURGER") {
            const filteredProducts = Products.filter(item => item.category === "Burger")
            setProducts(filteredProducts)
        }
        if (allCategory === "PIZZA") {
            const filteredProducts = Products.filter(item => item.category === "Pizza")
            setProducts(filteredProducts)
        }
        if (allCategory === "BREAD") {
            const filteredProducts = Products.filter(item => item.category === "Bread")
            setProducts(filteredProducts)
        }
    }, [allCategory])

    return (
        <Helmet title="Home" >
            <section >
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero-contect">
                                <h5 className='mb-3'>Easy way to make an order</h5>
                                <h1 className='mb-4 hero-title'><span>HUNGRY?</span> Just wait <br /> food at<span> your door</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum eligendi neque.</p>
                                <div className="hero-btns d-flex align-items-center gap-5 mt-4">
                                    <button className='order-btn d-flex align-items-center justify-content-between'>Order now <i className="ri-arrow-right-s-line mt-1"></i></button>
                                    <button className='all-foods-btn'><Link to='/foods'>See all foods</Link></button>
                                </div>
                                <div className='hero-service d-flex align-items-center gap-5 mt-5'>
                                    <p className='d-flex align-items-center gap-2'><span className='shipping-icon'><i className="ri-car-line"></i></span> No shipping charge</p>
                                    <p className='d-flex align-items-center gap-2'><span className='shipping-icon'><i class="ri-shield-check-line"></i></span> 100% secure checkout</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero-img">
                                <img src={heroImg} alt="hero-img" className='w-100' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='pt-0' >
                <Category />
            </section>

            <section >
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h5 className='feature-subtitle mb-4'>What we serve</h5>
                            <h2 className='feature-title'>Just sit back at home</h2>
                            <h2 className='feature-title'>we will <span>take care</span></h2>
                            <p className='mb-1 mt-4 feature-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, omnis.</p>
                            <p className='feature-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet?</p>
                        </Col>

                        {
                            featureData.map((item, index) => (
                                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                                    <div className="feature-item text-center px-5 py-3">
                                        <img src={item.img} alt="" className='w-25' />
                                        <h5 className='fw-bold'>{item.title}</h5>
                                        <p>{item.decs}</p>
                                    </div>
                                </Col>
                            ))
                        }


                    </Row>
                </Container>
            </section>
            <section className='d-flex align-items-center justify-content-center food-category-section'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2>Popular Foods</h2>
                        </Col>
                        <Col lg='12'>
                            <div className="food-category d-flex align-items-center justify-content-center">
                                <button className={`all-btn ${allCategory === "ALL" ? 'foodBtnActive' : ''}`} onClick={() => setAllCategory("ALL")}>All</button>
                                <button className={`d-flex align-items-center gap-2 ${allCategory === "BURGER" ? 'foodBtnActive' : ''}`} onClick={() => setAllCategory("BURGER")}>
                                    <img src={foodCategoryImg01} alt="" /> Burger
                                </button>
                                <button className={`d-flex align-items-center gap-2 ${allCategory === "PIZZA" ? 'foodBtnActive' : ''}`} onClick={() => setAllCategory("PIZZA")}>
                                    <img src={foodCategoryImg02} alt="" /> Pizza
                                </button>
                                <button className={`d-flex align-items-center gap-2 ${allCategory === "BREAD" ? 'foodBtnActive' : ''}`} onClick={() => setAllCategory("BREAD")}>
                                    <img src={foodCategoryImg03} alt="" /> Bread
                                </button>
                            </div>
                        </Col>
                        {
                            products.map((item) => (
                                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                                    <ProductCart item={item} />
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>
            <section className='why-choose-us'>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <img src={whyImg} alt="" className='w-100' />
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="why-tasty">
                                <h2 className='why-tasty-title mb-4'>Why <span>Teasy Treat?</span></h2>
                                <p className='teasty-treat-decs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo sunt natus odit in, pariatur velit est animi commodi tenetur sit iste eum, molestiae quasi ipsam fuga, aliquam reprehenderit temporibus?</p>
                            </div>
                            <ListGroup className='mt-4'>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='choose-us-title d-flex align-items-center gap-2'>
                                        <i className="ri-checkbox-circle-line"></i>Fresh and tasty food
                                    </p>
                                    <p className='choose-us-decs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, velit!</p>
                                </ListGroupItem>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='choose-us-title d-flex align-items-center gap-2'>
                                        <i className="ri-checkbox-circle-line"></i>Quality suppored food
                                    </p>
                                    <p className='choose-us-decs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, velit!</p>
                                </ListGroupItem>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='choose-us-title d-flex align-items-center gap-2'>
                                        <i className="ri-checkbox-circle-line"></i>Order from any location
                                    </p>
                                    <p className='choose-us-decs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, velit!</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2>Hot Pizza</h2>
                        </Col>
                        {
                            hotPizza.map((item) => (
                                <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                                    <ProductCart item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className='testimonial '>
                                <h5 className='testimonial-subtitle mb-4'>Testimonial</h5>
                                <h2 className='testimonial-title mb-4'>What our <span>customars</span> are saying</h2>
                                <p className='testimonial-decs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus temporibus optio aut necessitatibus adipisci ad voluptate fuga dignissimos perspiciatis quis?</p>
                                <TestimonialSlider />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <img src={networkImg} alt="" className='w-100' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home