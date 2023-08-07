import React from 'react'
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className=' py-4 '>
                <div className='container-xxl'>
                    <div className='d-flex flex-column'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-md-6'>
                                <div className='footer-top-data d-flex flex-column align-items-center align-md-start gap-2'>
                                    {/* Search Bar */}

                                    {/* Text */}
                                    <h2 className='mb-0 text-white'>Since you're already here, let's take your hygiene up a notch.</h2>
                                    <div className="input-group">
                                        <input type="text" className="form-control py-1" placeholder="Write Your Email Here" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                                        <span className="input-group-text subscribe p-2 text-white" id="basic-addon2">Subscribe</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6  d-flex justify-content-end'>
                                {/* Social Icons */}

                                <div className='row '>
                                    <h1 className='text-white'>Follow Us Here</h1>
                                    <div className='social-icons d-flex align-items-end gap-30 mt-4 ml-5'>
                                        <a className='text-white' href='#'>
                                            <BsLinkedin className='fs-4' />
                                        </a>
                                        <a className='text-white' href='#'>
                                            <BsInstagram className='fs-4' />
                                        </a>
                                        <a className='text-white' href='#'>
                                            <BsGithub className='fs-4' />
                                        </a>
                                        <a className='text-white' href='#'>
                                            <BsYoutube className='fs-4' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <footer className=' py-4'>
                <div className='container-xxl'>
                    <div className='row'>

                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Useful Links</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link to='/' className="text-white py-2 mb-1">About Us</Link>
                                <Link to='/' className="text-white py-2 mb-1">Contact Us</Link>
                                <Link to='/' className="text-white py-2 mb-1">FAQ's</Link>
                                <Link to='/' className="text-white py-2 mb-1">Refund Policy</Link>
                                <Link to='/' className="text-white py-2 mb-1">Blog</Link>
                                <Link to='/' className="text-white py-2 mb-1">Terms & Conditions</Link>
                                <Link className="text-white py-2 mb-1">Store Locator</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Top Categories</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className="text-white py-2 mb-1"> Period Care</Link>
                                <Link className="text-white py-2 mb-1">Toilet Hygiene</Link>
                                <Link className="text-white py-2 mb-1">Men Hygiene</Link>
                                <Link className="text-white py-2 mb-1">Body & Face</Link>
                                <Link className="text-white py-2 mb-1">Intimate Care</Link>
                                <Link className="text-white py-2 mb-1">Maternity Care</Link>
                                <Link className="text-white py-2 mb-1">Hair Care</Link>
                                <Link className="text-white py-2 mb-1">Shaving & Grooming</Link>
                                <Link className="text-white py-2 mb-1">Elderly Care</Link>
                                <Link className="text-white py-2 mb-1">Sexual Wellness</Link>

                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className="text-white py-2 mb-1"> Pee Safe</Link>
                                <Link className="text-white py-2 mb-1">FURR</Link>
                                <Link className="text-white py-2 mb-1">Raho Safe</Link>
                                <Link className="text-white py-2 mb-1">Domina</Link>
                                <Link className="text-white py-2 mb-1">Loyalty Program</Link>
                                <Link className="text-white py-2 mb-1">Become an Affiliate</Link>
                                <Link className="text-white py-2 mb-1">HaqSePeriod</Link>
                            </div>
                        </div>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Find US</h4>
                            <div>
                                <address className='text-white fs-6'>Pee Safe, Redcliffe Hygiene Private Limited <br />
                                    Limited <br />
                                    PrinCode: 131103
                                </address>
                                <a href='tel:91 8264954234' className='mt-3 d-block mb-1 text-white'> care@peesafe.com</a>
                                <a href='' className='mt-2 d-block mb-0 text-white'>Call : +91 9870279353</a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className=' py-4'>
                <div className='container.xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>&copy:{new Date().getFullYear()};powered by Developer's Corner</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer