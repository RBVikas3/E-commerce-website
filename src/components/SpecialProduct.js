import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function SpecialProduct() {
    return (
        <>
            <div className='row'>
                <div className='col-4 mb-3'>
                    <div className='special-product-card'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <img className='special-img img-fluid' src="https://media.istockphoto.com/id/1046172446/photo/makeup-cosmetic-products-over-pastel-pink-background-flat-lay-top-view.jpg?s=612x612&w=0&k=20&c=9xbuxt24al3Dfdh5lBI1gZHStz8ddMh2DLcqAMw7vLg=" alt='watch' />
                            </div>
                            <div className='special-product-content'>
                                <h5 className='brand'>  Toilet Seat Sanitizer Spray (Mint, Lavender & Floral) - 75ml (Pack of 3)</h5>
                                <h6 className='title'>

                                    Just Spray And Protect Yourself From UTI
                                </h6>
                                <ReactStars
                                    count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                                />
                                <p className='price'><span className='red-p'>$100</span> &nbsp; <strike>$200</strike></p>
                                <div className='discount-till d-flex align -items-center gap-10'>
                                    <p className='mb-0'>
                                        <b>5 days</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>
                                </div>
                                <div className='prod-count my-3'>
                                    <p>Products: 5</p>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <Link className='addToCart'>Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 mb-3'>
                    <div className='special-product-card'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <img className='special-img img-fluid' src="https://media.istockphoto.com/id/826179114/photo/luxury-gold-cheek-brush-with-pink-red-brush-on.jpg?s=612x612&w=0&k=20&c=PrCXtpcx1xR2j6AYHrqHi1tfpknXvwLoIg1g_Rjd960=" alt='watch' />
                            </div>
                            <div className='special-product-content'>
                                <h5 className='brand'> Reusable Menstrual Cup - Medium (1N)</h5>
                                <h6 className='title'>
                                    Made From Medical Grade Silicone To Give You Rash-Free Periods Experience
                                </h6>
                                <ReactStars
                                    count={5} size={24} value={5} edit={false} activeColor="#ffd700"
                                />
                                <p className='price'><span className='red-p'>$100</span> &nbsp; <strike>$200</strike></p>
                                <div className='discount-till d-flex align -items-center gap-10'>
                                    <p className='mb-0'>
                                        <b>3 days</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>
                                </div>
                                <div className='prod-count my-3'>
                                    <p>Products: 5</p>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <Link className='addToCart'>Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 mb-3'>
                    <div className='special-product-card'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <img className='special-img img-fluid' src="https://media.istockphoto.com/id/1276740594/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=Qngk5J8pyZatGUpkD4EnnGaZYCFaoQs55nMnCF_g1KI=" alt='watch' />
                            </div>
                            <div className='special-product-content'>
                                <h5 className='brand'>   Aloe Vera Panty Liners (50 Liners)</h5>
                                <h6 className='title'>

                                    Protects You Against Surprise Spotting & Unwanted Discharge  You Rash-Free
                                </h6>
                                <ReactStars
                                    count={5} size={24} value={5} edit={false} activeColor="#ffd700"
                                />
                                <p className='price'><span className='red-p'>$100</span> &nbsp; <strike>$200</strike></p>
                                <div className='discount-till d-flex align -items-center gap-10'>
                                    <p className='mb-0'>
                                        <b>3 days</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>:
                                    <span className='badge rounded-circle p-2 bg-danger text-white'>1</span>
                                </div>
                                <div className='prod-count my-3'>
                                    <p>Products: 5</p>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" style={{ "width": "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <Link className='addToCart'>Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default SpecialProduct