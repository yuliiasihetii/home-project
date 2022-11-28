import React from 'react'
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import '../../styles/slider.css'

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div >
                <p className='review-text'>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat ab dolor modi, deleniti corrupti culpa ipsa suscipit! Debitis voluptate praesentium iste blanditiis aliquam ex dicta magni sint quia illum."
                </p>
                <div className='slider-content d-flex align-items-center gap-3'>
                    <img src={ava01} alt="" className='rounded' />
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            <div >
                <p className='review-text'>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat ab dolor modi, deleniti corrupti culpa ipsa suscipit! Debitis voluptate praesentium iste blanditiis aliquam ex dicta magni sint quia illum."
                </p>
                <div className='slider-content d-flex align-items-center gap-3'>
                    <img src={ava02} alt="" className='rounded' />
                    <h6>Mitchel Marsh</h6>
                </div>
            </div>
            <div>
                <p className='review-text'>
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus placeat ab dolor modi, deleniti corrupti culpa ipsa suscipit! Debitis voluptate praesentium iste blanditiis aliquam ex dicta magni sint quia illum."
                </p>
                <div className='slider-content d-flex align-items-center gap-3'>
                    <img src={ava03} alt="" className='rounded' />
                    <h6>Steven Crock</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider