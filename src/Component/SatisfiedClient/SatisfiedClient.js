import React from 'react';
import Icon from "../../img/fav-icons.webp";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Star from '../../img/home-stars.png';

function SatisfiedClient() {
    return (
        <div>
            <div className='SatisfiedClient'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12'>
                            <div className='Icondesigners'>
                                <img className='img-fluid' src={Icon} />
                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                            <div className='Unique'>
                                Unique, clean and results-driven
                            </div>
                            <h1 className='titleWeb'>
                                Web Design, eCommerce & Mobile App Development solutions.
                            </h1>
                            <div className='seprater'>
                            </div>
                            <p className=''>
                                A premium design & mobile app development agency propelled by the idea of well-designed and easy-to-use websites & apps for mobile, web & desktop that increases your brand presence over the internet. We believe in making app development affordable and accessible for our clients, without making it too complicated to use. Our easy, hassle-free, and the guided process will hold your hand every step of the way. We started as a design firm and evolved into a premium solutions provider for web design, mobile app development, and eCommerce solutions with or without advanced CRM integration and conversion optimization.
                                <br>
                                </br>
                                <br>
                                </br>
                                Hence the slogan <span className='Underline'>“Logic inspired by Design“.</span>
                            </p>


                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
                            <div className='SatisfiedClien'>
                                <div className='clientNumber'>
                                    200+
                                </div>
                                <div>
                                    <h1>Satisfied Clients</h1>
                                    <p className=''>almost in every country of the world</p>
                                </div>
                            </div>
                            <div className='sepraterTwo mb-4'>
                            </div>
                            <Carousel showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} stopOnHover={false}>
                                <div className='SlideOne'>
                                    <div className='row'>
                                        <div className='col-4'>

                                            <div className='ImgWidth'>
                                                <img className='img-fluid' src="https://i0.wp.com/www.designersx.us/wp-content/uploads/2020/09/andrew.jpg?resize=120%2C120&ssl=1" />

                                            </div>
                                        </div>
                                        <div className='col-8'>

                                            <div className='IdText' >
                                                <p className='FirstName'>Andrew<span>Mantle</span></p>
                                                <div className='Designation'>CEO,IMO & Marine Surveys Pte Ltd  &nbsp; &nbsp;</div>
                                                <div className='DesignationStars'>
                                                    <img className='img-fluid' src={Star} />
                                                    <p>Visionary Approach</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <p className='text-start'>If you are looking for someone to provide vision to your PROJECT, then I would definitely suggest hiring DesignersX</p>

                                </div>
                                <div className='SlideOne'>
                                    <div className='row'>
                                        <div className='col-4'>

                                            <div className='ImgWidth'>
                                                <img className='img-fluid' src="https://i0.wp.com/www.designersx.us/wp-content/uploads/2020/09/robert.jpg?resize=120%2C120&ssl=1" />

                                            </div>
                                        </div>
                                        <div className='col-8'>

                                            <div className='IdText' >
                                                <p className='FirstName'>Robert<span>Hegarty</span></p>
                                                <div className='Designation'>CEO,SPORTVOTE- South Korea  &nbsp; &nbsp;</div>
                                                <div className='DesignationStars'>
                                                    <img className='img-fluid' src={Star} />
                                                    <p>Exemplary Service</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <p className='text-start'>The Service has been exemplary and the quality of work completed to the highest standard. The 7k program is an excellent opportunity for a high-quility MVP built at an affordable price.</p>

                                </div>

                            </Carousel>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SatisfiedClient
