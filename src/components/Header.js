import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
// import { FiUser } from 'rect-icons/fi'
import { FaUser } from 'react-icons/fa';
// import { AiOutlineSearch } from "react-icons"
const Header = () => {
    return (
        <>
            <header className='header-top-strip '>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='navHeader text-white mb-0 text-center'>In Freedom Sale Is Live | Add 2 items To Get 15% OFF | User Code: FLAG15</p>
                        </div>


                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div container-xxl>
                    <div className='row'>
                        <div className='col-12'>
                            {/* <div className='col-8'> */}
                            <div className='menu-bottom d-flex align-item-center gap-30'>
                                <h2 className='peeSafeColor'>Pee Safe</h2>
                                <h1 className='furr'>FURR</h1>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-between gap-15'>
                                        <NavLink className="bottom-menu-links" to='/'>Products</NavLink>
                                        <NavLink className="bottom-menu-links" to='/product'>Brands</NavLink>
                                        <NavLink className="bottom-menu-links" to='/Combos'>Combos</NavLink>
                                        <NavLink className="bottom-menu-links" to='/contact'>BestCeller</NavLink>
                                        <NavLink className="bottom-menu-links" to='/contact'>Track Order</NavLink>
                                        <NavLink className="bottom-menu-links" to='/Bloge'>Blog</NavLink>
                                        <NavLink className="bottom-menu-links Launches " to='/Bloge'>New Launches</NavLink>
                                        <NavLink><span><AiOutlineSearch size={36} /></span></NavLink>
                                        <NavLink><span><FaUser size={36} /></span></NavLink>
                                        <NavLink> <span ><i className="fa-solid fa-cart-shopping fa-2x shoppingCart"></i></span></NavLink>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                            {/* <div className='col-4'>
                               
                            </div> */}
                        </div>

                    </div>
                </div>
            </header>
        </>

    )
}

export default Header