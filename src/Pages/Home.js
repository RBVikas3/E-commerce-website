import React from 'react'
import { NavLink, Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import SpecialProduct from '../components/SpecialProduct';
import { Carousel } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <>
            <section class1='home-wrapper-1'>
                {/* <div className='container-xxl'> */}
                {/* <div className='row'> */}
                <div className='col-12'>
                    <div className='main-banner position-relative '>

                        <img className='bannerUrl' src="https://media.istockphoto.com/id/1286682876/photo/beauty-treatment-items-for-spa-procedures-on-white-wooden-table-massage-stones-essential-oils.jpg?s=1024x1024&w=is&k=20&c=q_GuhDsD1iqztE7535XbWnGVfV1Fbyo-baWBoakfUzs="></img>

                    </div>
                    <div className='main-banner-content position-absolute'>
                        <h4 className='freedomSale'>FREEDOM SALE </h4>
                        <h5>-Extra 50% Off-</h5>
                        <p className='ptag'>On purchase of 2 or more items </p>
                        <p className='ptag' >Use Codes: FLAG15</p>
                        <Link className='buyNow button text-white'>Buy Now</Link>
                    </div>

                    {/* </div> */}
                    {/* </div> */}

                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <h1>Explore By Categories</h1>
                    <div className="image-grid">

                        <div className="image-item">
                            <img src="https://media.istockphoto.com/id/1390665987/photo/pastel-pink-make-up.webp?b=1&s=170667a&w=0&k=20&c=_32fblIOvzdhhvATpZbxZQYA8xg_pt77-etnFOUQxyQ=" alt="Image 1" className="round-image" />
                            <p className="image-name">Face Care</p>
                        </div>
                        <div className="image-item">
                            <img src="https://media.istockphoto.com/id/505751448/photo/turmeric.webp?b=1&s=170667a&w=0&k=20&c=x60LW34JzFbR6ZUGN-OnGxrwgGYlnYs9h67BNpsBxWs=" alt="Image 2" className="round-image" />
                            <p className="image-name">Body Care</p>
                        </div>
                        <div className="image-item">
                            <img src="https://media.istockphoto.com/id/1053076830/photo/top-view-of-woman-hand-mixing-hair-dye-color-and-dye-hair-products-on-white-background-space.jpg?s=612x612&w=0&k=20&c=m4X2hYQ2VQSCTkOQNXxVQgL5SVfIN6wy5QekCvr1glM=" alt="Image 2" className="round-image" />
                            <p className="image-name">Hair Care</p>
                        </div>
                        <div className="image-item">
                            <img src="https://media.istockphoto.com/id/641219694/photo/pretty-young-woman-with-cosmetics.jpg?s=612x612&w=0&k=20&c=_jckqelNYxw4ARehkoENIvIjiI4cffVfx4uAEC0152k=" alt="Image 2" className="round-image" />
                            <p className="image-name">Toilet Hygiene</p>
                        </div>
                        <div className="image-item">
                            <img src="https://media.istockphoto.com/id/1347109662/photo/baby-bottle-with-milk-on-white-background-selective-focus.jpg?s=612x612&w=0&k=20&c=DxUVb86z5SydLXn90q6AQwWrgtf_kWh_WWL4dHMPiMU=" alt="Image 2" className="round-image" />
                            <p className="image-name">Maternity Care</p>
                        </div>
                        {/* <!-- Repeat for the rest of the images --> */}
                    </div>
                </div>
            </section>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='section-heading'>Special Products</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <SpecialProduct />
                        {/* <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct /> */}
                    </div>
                </div>
            </section>
            <section className='famous-wrapper py-3 home-wrapper-2'>
                <div className='container-xxl'>
                    <h1>Special Offers for You</h1>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='https://media.istockphoto.com/id/172413372/photo/perfume-series.jpg?s=612x612&w=0&k=20&c=DMv9izLCXFN46ewSMm6nZC572c7R0QxBoy_CWKnZ_EA=' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h3>Extra</h3>
                                    <h1 className='text-white'>15%<span>Off</span></h1>

                                    <h3>On Purchase of 2 or more product</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='https://media.istockphoto.com/id/172379335/photo/perfume-bottles.jpg?s=612x612&w=0&k=20&c=NZlcmpiOIaBS6PBe4ERc-dS8eUQs2BlpQyH9STRBNUQ=' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h3>Extra</h3>
                                    <h1 className='text-white'>15%<span>Off</span></h1>

                                    <h3>On Purchase of 2 or more product</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='https://media.istockphoto.com/id/1159952152/photo/perfume-bottle-in-the-sun-image.jpg?s=612x612&w=0&k=20&c=_OW_QcZqU3Pgid8ySqM7hE6IgMggH8mWmVMEYug5WVM=' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h3>Extra</h3>
                                    <h1 className='text-white'>10%<span>Off</span></h1>

                                    <h3>On Purchase of 2 or more product</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='https://media.istockphoto.com/id/984173186/photo/glass-perfume-spray-bottles-green-eucalyptus-leaves-black-soft-background.jpg?s=612x612&w=0&k=20&c=-hdZ_B_NMnZa6eF9eTDwKxplYFrk9sU5E1N8SBjcFlQ=' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h3>Extra</h3>
                                    <h1 className='text-white'>35%<span>Off</span></h1>

                                    <h3>On Purchase of 2 or more product</h3>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className='famous-wrapper py-3 home-wrapper-2'>
                <div className='container-xxl'>
                    <h1>A Story of Care: Our Journeys</h1>
                    <div className="flex-container">
                        <div className="image-container">
                            <img src="https://media.istockphoto.com/id/173818439/photo/cosmetic-bottle-under-water.jpg?s=612x612&w=0&k=20&c=HfajlMegviCKSr-u6ekGmF-KgMpb7DDpiCp46zb3w80=" alt="Image" />
                        </div>
                        <div className="text-container">
                            <h3>Pee Safe's story started with a road trip that left our Co-Founder, Srijana Bagaria, with a UTI in a hospital bed. Following her experience, she was determined to find a solution to unhazardous and unhygienic toilet experiences. Her research alongside our Founder, Vikas Bagaria, resulted in developing an impactful solution - The Toilet Seat Sanitizer.</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='marque-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <h1>Our Clients</h1>
                                <Marquee className='d-flex'>
                                    <div className='w-3'>
                                        <img className='marquee-img' src='https://images.unsplash.com/photo-1614312385003-dcea7b8b6ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80' alt='brand' />
                                    </div>
                                    <div className=' w-3'>
                                        <img className='marquee-img' src='https://images.unsplash.com/photo-1649006708938-cf885c646df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80' alt='brand' />
                                    </div>
                                    <div className=' w-3'>
                                        <img className='marquee-img' src='https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80' alt='brand' />
                                    </div>
                                    <div className=' w-3'>
                                        <img className='marquee-img' src='https://1000logos.net/wp-content/uploads/2017/03/LG-logo.png' alt='brand' />
                                    </div>
                                    <div className=' w-3'>
                                        <img className='marquee-img' src='https://images.unsplash.com/photo-1604773851233-7ef99c08735f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='brand' />
                                    </div>

                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='famous-wrapper py-3 home-wrapper-2'>
                <div className='container-xxl'>
                    <h1>We've Been Recognized</h1>
                    <h5>Our commitment to innovation and care, our products are the best in hygiene and health, yet affordable.
                    </h5>
                    <div className="row col-md-12 card-recg">
                        <div className="col-md-4  ">
                            <div className="card ">
                                <div className='flex-column'>
                                    <div className="card-image">
                                        <img src='https://media.istockphoto.com/id/584574708/photo/soap-bar-and-liquid-shampoo-shower-gel-towels-spa-kit.jpg?s=612x612&w=0&k=20&c=TFeQmTwVUwKY0NDKFFORe3cwDCxRtotFgEujMswn3dc=' className='img-fluid' alt='famous' />


                                    </div>

                                    <div className="card-text">

                                        <p> Certified
                                            Owning more than 90% of toilet seat sanitizer category, Pee Safe aims to become a ₹1000 crore brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  ">
                            <div className="card ">
                                <div className='flex-column'>
                                    <div className="card-image">
                                        <img src='https://media.istockphoto.com/id/1136976095/photo/white-ceramic-tray-with-home-spa-supplies-in-home-bathroom-for-relaxing-rituals-candlelight.jpg?s=612x612&w=0&k=20&c=Mj1go6ysC24UNlQ3QOwO59U4URuv_7uaTskLhkKyfes=' className='img-fluid' alt='famous' />


                                    </div>

                                    <div className="card-text">

                                        <p> Certified
                                            Owning more than 90% of toilet seat sanitizer category, Pee Safe aims to become a ₹1000 crore brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  ">
                            <div className="card ">
                                <div className='flex-column'>
                                    <div className="card-image">
                                        <img src='https://media.istockphoto.com/id/832109622/photo/designers-drawing-website-ux-app-development.jpg?s=612x612&w=0&k=20&c=KoTjsFMGMXq1hZuySIA3PCtDbP_LuIBrGb7S7ThOaDY=' className='img-fluid' alt='famous' />


                                    </div>

                                    <div className="card-text">

                                        <p> Certified
                                            Owning more than 90% of toilet seat sanitizer category, Pee Safe aims to become a ₹1000 crore brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}

export default Home