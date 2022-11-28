import React, { useRef, useEffect } from 'react'

import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import '../../styles/header.css'
import '../../styles/index.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartUiActions } from '../../store/shopping/cartUiSlice'

const navLinks = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    }
]

const Header = () => {
    const menuRef = useRef(null);
    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch();

    const toggleMenu = () => menuRef.current.classList.toggle('show-menu')

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header-shrink')
            }

            else {
                headerRef.current.classList.remove('header-shrink')
            }
        })

        return () => window.removeEventListener('scroll')
    }, [])

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <div className="nav-wrapper d-flex align-items-center justify-content-between">
                    <Link className="logo" to='/home'>
                        <img src={logo} alt="logo" className='img' />
                        <h5 className='logo-title'>Tasty Treat</h5>
                    </Link>

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                navLinks.map((item, index) => (
                                    <NavLink className={navClass => navClass.isActive ? 'active-nav' : ''} to={item.path} key={index}>{item.display}</NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div className="nav-righ d-flex align-items-center gap-4">
                        <span className="cart-icon" onClick={toggleCart}>
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart-badge">{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link className='nav-menu' to='/login'><i className="ri-user-3-line "></i></Link>
                        </span>

                        <span className="mobile-menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header