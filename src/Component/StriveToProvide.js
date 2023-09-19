import React from 'react'
import { GoRocket } from "react-icons/go"
import { LiaTelegramPlane } from "react-icons/lia"
import { BsTrophy } from "react-icons/bs"
import { BsEmojiSmile } from "react-icons/bs"

function StriveToProvide() {
    return (
        <div>
            <section>
                <div className='container'>
                    <div className='strive_provide'>
                        <h3>We strive to provide</h3>

                        <div className='row py-4'>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <h6>TOP CLASS DESIGN AND LOGICALLY IMPLEMENT SOFTWARE SOLUTIONS</h6>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <p>Started from a single desk and 2 chairs office, We know the value and power of skills and how crucial it is to learn certain skills. But no one can teach you to come up with the idea, the logic and the design for the website or mobile app. That is something which a person have to generate from within. And We have been told we are good at it. </p>
                            </div>

                        </div>

                        <div className='row colorr_box1'>

                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 box1 boxcolor1'>
                                <div className='box1_in'><p> WHO WE ARE </p></div>
                                <div className='box2_in'><h6>SAFE & RELIABLE</h6></div>
                            </div>

                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 box1 boxcolor2 '>
                                <div className='box1_in'><p> WHO WE ARE </p></div>

                                <div className='box2_in'><h6>REMARKABLE SERVICES</h6></div>

                            </div>

                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 box1 boxcolor3'>
                                <div className='box1_in'><p> WHO WE ARE </p></div>
                                <div className='box2_in'><h6>DELIVER GREAT RESULT</h6></div>
                            </div>

                        </div>


                        <div className='row icone'>
                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6'>
                                <div className='icoone'>
                                    <GoRocket style={{ color: "#ffcc00" }} />
                                    <h4>2009</h4>
                                    <p style={{ color: "#ffcc00" }}> COMNPANY <br /> ESTABLISHED</p>

                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6'>
                                <div className='icoone'>
                                    <LiaTelegramPlane style={{ color: "#ff3a2d" }} />
                                    <h4>700+</h4>
                                    <p style={{ color: "#ff3a2d" }}>PROJECTS<br /> COMPLETED</p>

                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6'>
                                <div className='icoone'>
                                    <BsTrophy style={{ color: "#007aff" }} />
                                    <h4>16+</h4>
                                    <p style={{ color: "#007aff" }}>AWARDS/<br /> RECOGNITION</p>

                                </div>
                            </div>

                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6'>
                                <div className='icoone'>
                                    <BsEmojiSmile style={{ color: "#4cd964" }} />
                                    <h4>200+</h4>
                                    <p style={{ color: "#4cd964" }}>HAPPY <br />CLIENTS</p>

                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default StriveToProvide