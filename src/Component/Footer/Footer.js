import React from 'react'
import Logo from '../../img/logo.webp'

function Footer() {
  return (
    <>
    <div className='footer bg-Image'>
      <div className='container'>
        

        <div className='newsletter  pt-5 pb-3'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='news11'>
                <img src={Logo} />
                <p>DesignersX – The Web & Mobile App Development Company, was founded in 2008 as a Design Service agency for providing Graphic design, Website design, Software UI/UX design, and various other design-related services. Almost like any other small business, We started with just 2 chairs and a desk and quickly evolved into a full technology service agency providing solutions like Web applications, eCommerce solutions,
                  Turn-Key software solutions for SMEs, eLearning modules, Learning management solutions, and enterprise CRM solutions with likes of SugarCRM and SalesForce.</p>

              </div>
            </div>


            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='news12'>
                <p>Subscribe to Our Daily Newsletter</p>
                <label>Name </label><span> (required)</span><br />
                <input type='text' />
                <br />

                <label>Email </label><span> (required)</span><br />
                <input type='text' />
                <br />
                <br />
               

                <button>SUBSCRIBE</button>

              </div>

            </div>
          </div>

        </div>

        <div className='pt-5 pb-5'>


          <div className='row'>
            <div className='cols-2'>
              <div>
                © 2023 - All rights reserved
              </div>
              <div className='social-links'>


                <a href="https://www.facebook.com/DesignersX/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com/designersx"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/DesignersX"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a href="https://www.Instagram.com/Designers-X/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/company/designers-x"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://www.GitHub.com/DesignersX/"><i class="fa fa-github" aria-hidden="true"></i></a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className='menu-bottom-Mobile'>
    <div className='nav-bottom'>
      <ul>
       
      <a href="tel:%20+1%20888-606-0363" data-hover="Call Now">Call Now</a>
       

        <li><a href='https://designersx.setmore.com/dxstaff'>Book a Discussion</a></li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Footer