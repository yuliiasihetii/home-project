import React from 'react'
import products from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet.js'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/product-details.css'
import { useEffect, useState } from 'react'
import ProductCart from '../components/UI/producr-cart/ProductCart'
import { useDispatch } from 'react-redux'
import { cartAction } from '../store/shopping/cartSlice'
import ReactPaginate from 'react-paginate';

const FoodDetails = () => {
    const [tab, setTab] = useState('desc')
    const [userName, setUseName] = useState('')
    const [userEmail, setUseEmail] = useState('')
    const [userComent, setUserComent] = useState('')
    const { id } = useParams();
    const product = products.find(product => product.id === id)
    const dispatch = useDispatch()

    const [previewImg, setPreviewImg] = useState(product.image01)
    const relatedProduct = products.filter(item => product.category === item.category)
    const { title, price, category, desc, image01, image02, image03 } = product;

    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 4
    const visitedPage = pageNumber * productPerPage
    const displayPage = relatedProduct.slice(visitedPage, visitedPage + productPerPage)

    const pageCount = Math.ceil(relatedProduct.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const addItem = () => {
        dispatch(cartAction.addItem({
            id,
            title,
            price,
            image01
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setPreviewImg(image01)
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])
    return (
        <Helmet title='Product-details'>
            <CommonSection title={title} />
            <section>
                <Container>
                    <Row>
                        <Col lg='2' md='2'>
                            <div className="product-img">
                                <div className="img-item mb-4">
                                    <img src={image01} alt="" className='img-select-mini' onClick={() => setPreviewImg(image01)} />
                                </div>
                                <div className="img-item mb-4">
                                    <img src={image02} alt="" className='img-select-mini' onClick={() => setPreviewImg(image02)} />
                                </div>
                                <div className="img-item">
                                    <img src={image03} alt="" className='img-select-mini' onClick={() => setPreviewImg(image03)} />
                                </div>
                            </div>
                        </Col>
                        <Col lg='4' md='4'>
                            <div className="product-main-img">
                                <img src={previewImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="single-product-content">
                                <h2 className='product-title mb-3'>{product.title}</h2>
                                <p className='product-price'>Price: <span>${price}</span></p>
                                <p className='category'>Category: <span>{category}</span></p>
                                <button onClick={addItem} className='addToCart-btn'>Add to Cart</button>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <div className="tabs d-flex align-items-center gap-3 py-3">
                                <h6 className={`${tab === 'desc' ? 'tab-active' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                                <h6 className={`${tab === 'rev' ? 'tab-active' : ''}`} onClick={() => setTab('rev')}>Review</h6>
                            </div>

                            {
                                tab === 'desc' ? (
                                    <div className="tab-content">
                                        <p>{desc}</p>
                                    </div>
                                ) : (
                                    <div className='tab-form'>
                                        <div className="review pt-5">
                                            <p className="user-name">
                                                Jhon Doe
                                            </p>
                                            <p className='user-email'>jhon@gmail.com</p>
                                            <p className='feedback-text'>great product</p>
                                        </div>

                                        <form className='form' onSubmit={submitHandler}>
                                            <div className='form-group'>
                                                <input onChange={e => setUseName(e.target.value)} required type="text" placeholder='Enter your name' />
                                            </div>
                                            <div className='form-group'>
                                                <input onChange={e => setUseEmail(e.target.value)} required type="text" placeholder='Enter your email' />
                                            </div>
                                            <div className='form-group'>
                                                <textarea
                                                    onChange={e => setUserComent(e.target.value)}
                                                    rows={5} type="text"
                                                    placeholder='Write your review'
                                                    required
                                                />
                                            </div>
                                            <button className='addToCart-btn' type='submit'>Submit</button>
                                        </form>
                                    </div>
                                )
                            }


                        </Col>
                        <Col lg='12' className='mb-5 mt-5'>
                            <h2 className='related-product-title'>You might also like</h2>
                        </Col>
                        {
                            displayPage.map(item => (
                                <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                                    <ProductCart item={item} />
                                </Col>
                            ))
                        }
                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onClick={changePage}
                                previousLabel='Prev'
                                nextLabel='Next'
                                containerClassName='paginationBtns'
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default FoodDetails