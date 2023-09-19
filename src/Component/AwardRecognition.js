import React from 'react'
import Awardd1 from "../img/businessOfApps_featured.png"
import Awardd2 from "../img/clutch-top-software-2020.png"
import Awardd3 from "../img/appFutura_top-development-usa.png"
import Awardd4 from "../img/topdevelopers-ecommerce.png"
import Awardd5 from "../img/software-world_top-software-development.png"
import Awardd6 from "../img/itfirm-top-ap-developers-usa.png"
import Awardd7 from "../img/good-firms-top-mobile.png"
import Awardd8 from "../img/expertise-best-mobile-app-fort-lauderdale.png"
import Awardd9 from "../img/designrush-ar_vr.png"
import Flagg from "../img/FLAGG.png"
import greenGrass from "../img/greengrass.png"

function AwardRecognition() {
    return (
        <div>
            <div className='container'>
                <div className='awardReco'>
                    <h2 style={{ textAlign: 'start' }} >Awards & Recognition</h2>
                    <div class="uagb-ifb-separator2"></div>
                    <p>An organization is composed of people. And people are the strength and pillars to carry the organization with their work and commitment to the organization and make it what it is. Likewise, DesignersX has a hardworking and committed team. We have the core team who started it all and then we have our crucial team with experts for web design, eCommerce & mobile app development without which we would not be so proud of all the skillset and expertise we have today.

                    </p>

                </div>
            </div>
            <div className='awardR1'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className='awardR2'>
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner '>
                                            <img src={Awardd1} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd2} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd3} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd4} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd5} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd6} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd7} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd8} />
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6'>
                                        <div className='awardR_inner'>
                                            <img src={Awardd9} />
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className='awardR_i mb-4'>
                                <img className='img-fluid' src={Flagg} />
                            </div>
                            <div className='Discussion'>

                                <h6>Have a project to discuss?</h6>
                                <p>Our Award-Winning team is ready to take on new challenges.
                                    <br></br>
                                        Book a discussion with the Rockstar team with the timing of your choice based on your availability.

                                        
                                        </p>
                                        <button className='btn bookDiscussion'>BOOK A DISCUSSION</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
                

            </div>


        </div>

    )
}

export default AwardRecognition
