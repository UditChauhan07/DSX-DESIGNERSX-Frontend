import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa6";
import { GiIndiaGate } from "react-icons/gi";
import { BsGlobeAmericas } from "react-icons/bs";
function Locations() {
    return (
        <div>
            <div className='container pt-5 pb-5'>
                <div className='location text-center'>
                    <h3>Our Locations</h3>
                    <div class="uagb-ifb-separator1"></div>
                    <p>In case you are around, You can always book a face-to-face office discussion or just drop by the below locations.</p>
                    <div className='location_1'>
                        <div className='row'>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
                                <div className='location_12'>
                                    <FaLocationDot />
                                    <h3>London, United Kingdom</h3>
                                    <p>3rd Floor, 207 Regent Street
                                        London – W1B 3HH</p>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
                                <div className='location_12'>
                                    <FaFlagUsa />
                                    <h3>New York, United States</h3>
                                    <p>535 Fifth Avenue, 4th Floor
                                    New York City, NY – 10017</p>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
                                <div className='location_12'>
                                    <GiIndiaGate />
                                    <h3>Punjab, INDIA</h3>
                                    <p>699, Sec 82 JLPL
                                    Ind Area, Mohali – 140308</p>
                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
                                <div className='location_12'>
                                    <BsGlobeAmericas />
                                    <h3>London, United Kingdom</h3>
                                    <p>11210 NW 45th Street
                                    Coral Springs, FL – 33065</p>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Locations