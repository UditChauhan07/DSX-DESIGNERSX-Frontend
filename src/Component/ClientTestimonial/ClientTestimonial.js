import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import UserImg01 from '../../img/andrew.webp';
import UserImg02 from '../../img/jason-greenslade.webp';
function ClientTestimonial() {
    return (
        <div>
            <div className='ClientTestimonial'>
                <div className='container'>

                    <Carousel showArrows={false} showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} autoPlay={true} stopOnHover={false}>
                        <div className='row'>
                            <div className='col p-4'>
                                <div className='d-flex'>
                                    <div className='ClientImage m-auto'>
                                        <img className='img-fluid' src={UserImg01} />
                                    </div>
                                    <div className='text-end AuthSay'>
                                        <p>
                                            If you are looking for someone to provide vision to your website, then I would definitely suggest hiring DesignersX.
                                            <br></br>
                                            Job Well Done!
                                        </p>
                                        
                                        <div className='AuthName'>
                                            Andrew Mantle
                                        </div>
                                        <div className='company'>
                                            CEO, <b>IMO & Marine Surveys Pte Ltd</b> – SG
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='col p-4'>
                                <div className='d-flex'>
                                    <div className='ClientImage m-auto'>
                                        <img className='img-fluid' src={UserImg02} />
                                    </div>
                                    <div className='text-end AuthSay'>
                                        <p>
                                            Excellent job! Their skills are very good and they are easy to work with. I highly recommend them and will definitely work with them again on future 
                                            <br></br>
                                            websites or mobile apps.
                                        </p>
                                        
                                        <div className='AuthName'>
                                            Ed O’Keefe
                                        </div>
                                        <div className='company'>
                                            CEO, <b>Marine Essentials</b>  – the USA
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col p-4'>
                                <div className='d-flex'>
                                    <div className='ClientImage m-auto'>
                                        <img className='img-fluid' src={UserImg01} />
                                    </div>
                                    <div className='text-end AuthSay'>
                                        <p>
                                            If you are looking for someone to provide vision to your website, then I would definitely suggest hiring DesignersX.
                                            <br></br>
                                            Job Well Done!
                                        </p>
                                        
                                        <div className='AuthName'>
                                            Andrew Mantle
                                        </div>
                                        <div className='company'>
                                            CEO, <b>IMO & Marine Surveys Pte Ltd</b> – SG
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='col p-4'>
                                <div className='d-flex'>
                                    <div className='ClientImage m-auto'>
                                        <img className='img-fluid' src={UserImg02} />
                                    </div>
                                    <div className='text-end AuthSay'>
                                        <p>
                                            Excellent job! Their skills are very good and they are easy to work with. I highly recommend them and will definitely work with them again on future 
                                            <br></br>
                                            websites or mobile apps.
                                        </p>
                                        
                                        <div className='AuthName'>
                                            Ed O’Keefe
                                        </div>
                                        <div className='company'>
                                            CEO, <b>Marine Essentials</b>  – the USA
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </Carousel>
                </div>



            </div>
        </div>
    )
}

export default ClientTestimonial