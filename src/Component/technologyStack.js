import React from 'react'


import aminai from "../img/office-working-hours-cartoon-programme-e1600326840727.png"
import Code1 from "../img/ANGULAR-JS.png"
import Code2 from "../img/PHTHON.png"
import Code3 from "../img/NODE-JS.png"
import Code4 from "../img/SQL.png"
import Code5 from "../img/FLUTTER.png"
import Code6 from "../img/KOTLIN.png"
import Code7 from "../img/VUE-JS.png"
import Code8 from "../img/ANGULAR-JS.png"
import Code9 from "../img/RUBY.png"



function TechnologyStack() {
    return (
        <div>
            <div className='container'>
                <div className='stack_tech'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className='stack_content'>
                                <h3>Our Technology Stack</h3>
                                <p>It makes sense to be proud of all the achievements and work we have done. And we are proud to say that we have been doing it with the help of Opensource as well as proprietary technologies developed by awesome people. Our specialization in Web Design, Mobile App Development & eCommerce solutions enabled us with a large array of tech skills</p>
                                <p>Here is an ever-growing list of technologies, We love & Use 💙❤️💚</p>
                                <img alt='aminai' src={aminai} />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className='stack_tech-img'>
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code1} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code2} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code3} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code4} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code5} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code6} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code7} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code8} />
                                    </div>

                                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-6 tech-img-controll'>
                                        <img alt='' src={Code9} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default TechnologyStack