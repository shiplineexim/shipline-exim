import React from 'react'
import SupportingGroup from './SupportingGroup'

function ProductDescription() {
    return (
        <>
            <div className="banner-area-2" style={{ marginTop: "0px" }}>
                <div>
                    <div className="">
                        <div className="col-md-12">
                            <div className="banner-inner">
                                <img src={process.env.PUBLIC_URL + "/images/banner-image/About-heading.jpg"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-res-sm-50px">
                            <div className="about-left-image">
                                <img src={process.env.PUBLIC_URL + "/images/banner-image/about.png"} alt="" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="about-title">
                                    <h2>Wheat</h2>
                                </div>
                                <p className="mb-30px">
                                Availability: In Stock
                                </p>
                                <p className="mb-30px">
                                We at Sarvopari Exim give assurance for choosing the best grocery 
                                items to export in the different parts of the world. Free from any pesticides and fertilizers, 
                                the farm-fresh spices, pulses, vegetables, fruits, dairy products and other items increases the taste of 
                                cooked food and gives the real Indian taste. Full of minerals, vitamins,
                                 proteins, and natural taste, we guarantee to give you the best!
                                </p>
                                {/* <p>
                                    We at Sarvopari Exim supply premium quality products to the distributors and importers
                                    for the retail market, and directly to the food service industry. We take pride in
                                    providing and managing a sustainable supply chain solution, connecting Indian farmers
                                    and manufacturers with rewarding global markets for quality food products. We take pride
                                    in our customer service, and our well-qualified team ensures uncompromised satisfaction
                                    and peace of mind across the supply chain.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="banner-3-area" style={{ marginTop: "2px", marginBottom: "50px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30">
                            <div className="banner-wrapper banner-box">
                                <img src={process.env.PUBLIC_URL + "/images/banner-image/mission.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="banner-wrapper banner-box">
                                <img src={process.env.PUBLIC_URL + "/images/banner-image/vision.jpg"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SupportingGroup />
        </>
    )
}

export default ProductDescription