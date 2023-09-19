import React from 'react'
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa6";
// import Link from "next/link"

function CoreServices() {
  return (
    <div>
      <div className='container'>
        <div className='core_ser'>
          <h3>Our core services & expertise</h3>
          <div class="uagb-ifb-separator1"></div>
          <p>Being one of the leading design & development companies, our services provide you profitable results that you are looking for. No matter whether you have a small, medium, or large-scale business, we got your back. Our main motive is to serve our clients with the best ever services with A+ satisfaction.</p>

          <div className='core_iiner'>
            <div className='row'>
              <div className='col-xl-4 col-md-6 col-sm-12'>
                <div className='core_boxws'>
                  <AiFillHtml5 />
                  <div class="uagb-ifb-separator"></div>
                  <h2>Web Design & Development</h2>
                  <p>Full-stack Web design & development services for app development & design projects ranging from Informational to complete online applications. We work with open source technologies like PHP, Java, Python & JS Frameworks like Angular, Node & Ionic</p>
                  <button>Click here for details</button>
                </div>
              </div>

              <div className='col-xl-4 col-md-6 col-sm-12'>
                <div className='core_boxws'>
                  <AiFillApple />
                  <div class="uagb-ifb-separator"></div>
                  <h2>Mobile App Development</h2>
                  <p>We specialize in Hybrid, Native, or Combined application development for Android and iPhone. Whether you have a unique idea or you want an app for your organization, We can deliver efficient & affordable Mobile applications.</p>
                  <button>Click here for details</button>
                </div>
              </div>

              <div className='col-xl-4 col-md-6 col-sm-12'>
                <div className='core_boxws'>
                  <FaUserAstronaut />
                  <div class="uagb-ifb-separator"></div>
                  <h2>eCommerce Solutions</h2>
                  <p>eCommerce solutions like a custom-coded eCommerce website, Pre-Hosted like Shopify and Big commerce, or open source solutions like Magento, Prestashop, or Opencart. Start selling online in a matter of days.</p>
                  <button>Click here for details</button>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default CoreServices