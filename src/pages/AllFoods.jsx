import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import CommonSection from '../components/UI/common-section/CommonSection.jsx'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/fake-data/products'
import ProductCart from '../components/UI/producr-cart/ProductCart'
import '../styles/pagination.css'
import '../styles/all-foods.css'
import '../styles/index.css'
import ReactPaginate from 'react-paginate';

const AllFoods = () => {
    const [searchItem, setSearchItem] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = products.filter((item) => {
        if (searchItem.value === '') return item
        if (item.title.toLowerCase().includes(searchItem.toLowerCase())) return item
    })

    const productPerPage = 8
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

    const pageCount = Math.ceil(searchedProduct.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [products])

    return (
        <Helmet title='All-Foods'>
            <CommonSection title='All Foods'></CommonSection>

            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6' className='mb-2'>
                            <div className="searcg-widget d-flex align-items-center justify-content-between">
                                <input type="text" placeholder="I'm looking for.... " value={searchItem} onChange={e => setSearchItem(e.target.value)} />
                                <span><i class="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6' className='mb-5'>
                            <div className="sorting-widget text-end ">
                                <select name="" id="" className='w-50'>
                                    <option>Select the option</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                        {
                            displayPage
                                .map((item) => (
                                    <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
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

export default AllFoods