import React from 'react'
import imad from "../img/removebg-preview.png"
// import {AiFillHtml5} from "react-icons/ai";

function SecureGuaranty() {
  return (
    <div className='blue_banner'>
      <div className='container'>
        <div className='secure1'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='secure2'>
                <h2>100% Secure engagement with <b>Guaranteed</b>  Commitment</h2>
                <p>
                  We know the value of long-lasting relationships and understand that relationships
                  take time to build. To make sure we develop trust with each client we acquire,
                  We have a strong system to ensure your security towards our commitment</p>
                <ul>
                  <li>Money Back Guarantee for 2 weeks</li>
                  <li>Safeguarding your Ideas with NDAs</li>
                  <li>Flexible payment plans & transparent policies</li>
                </ul>

                <button>START CHAT</button>
                <button>BOOK DISCUSSION</button>
              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>

              <div className='imad-banner'>
                <img className='img-fluid' src={imad} />

              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  )
}

export default SecureGuaranty