import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import summi_beniwal from "../img/Summi-Headshot.png"
import Kulbir from "../img/ks-small-headshot.png"
import Freddie from "../img/cropped-fredd-good.png"
import Heidi from "../img/IMG_1345.png"

function TeamDesignerx() {
    return (
        <div>
            <div className='designerx'>
                <div className='container'>
                    <h2>Team @ DesignersX</h2>
                    <div class="uagb-ifb-separator1"></div>
                    <p>An organization is composed of people. And people are the strength and pillars to carry the organization with their work and commitment to the organization and make it what it is. Likewise, DesignersX has a hardworking and committed team. We have the core team who started it all and then we have our crucial team with experts for web design, eCommerce
                        & mobile app development without which we would not be so proud of all the skillset and expertise we have today.</p>
                </div>
                <div className='designerx_CoreTeam'>
                    <div className='container'>
                        <h3 className='text-center'>Our Core Team</h3>
                        <div class="uagb-ifb-separator1"></div>

                        <div className='row'>
                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12'>
                                <div className='designer_inner'>
                                    <img src={summi_beniwal} />
                                    <h5>Summi Beniwal</h5>
                                    <a href='#'><span>CEO and Founder</span></a>
                                    <p>More than 10 years in the industry and qualifications to match. Manage operations with
                                        experience in enterprise planning and growth structuring.</p>
                                    <BsLinkedin />

                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12'>
                                <div className='designer_inner'>
                                    <img src={Kulbir} />
                                    <h5>Kulbir Singh</h5>
                                    <a href='#'>Chief Technical Officer</a>
                                    <p>15+ years of Industry experience and extensive experience in the complete
                                        application development cycle, architecture and design, technology sourcing, and team handling</p>
                                    <BsTwitter /> <BsFacebook /> <BsLinkedin /> <BsInstagram />

                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12'>
                                <div className='designer_inner'>
                                    <img src={Freddie} />
                                    <h5>Freddie Batista</h5>
                                    <a href='#'>Director, Business Development</a>
                                    <p>Multiple degrees and 20+ years of experience speak for himself when
                                        Freddie starts networking. A magnetic personality and the best business developer you can get.</p>
                                    <BsLinkedin />

                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12'>
                                <div className='designer_inner'>
                                    <img src={Heidi} />
                                    <h5>Heidi Brumfield</h5>
                                    <a href='#'>Director, Sales, and Marketing</a>
                                    <p>Master of trade and Champion in Online Sales with an emphasis on customer success. A great following on social media platforms speaks for he</p>
                                    <BsLinkedin />

                                </div>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default TeamDesignerx