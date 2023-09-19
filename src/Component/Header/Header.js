import React from 'react'
import Logo from '../../img/logo.webp'
function Header() {
    return (
        <div>
            <div>
                <nav>
                    <div class="wrapper">
                        <div class="logo"><a href="#">
                            <img className='img-fluid' src={Logo}/>
                            </a></div>
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul class="nav-links">
                            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                            <li class="Active"><a href="#">Home</a></li>
                            <li><a href="#">Company</a></li>
                            <li>
                                <a href="#" class="desktop-item">Technologies</a>
                                <input type="checkbox" id="showDrop" />
                                <label for="showDrop" class="mobile-item">Dropdown Menu</label>
                                <ul class="drop-menu">
                                    <li><a href="#">Drop menu 1</a></li>
                                    <li><a href="#">Drop menu 2</a></li>
                                    <li><a href="#">Drop menu 3</a></li>
                                    <li><a href="#">Drop menu 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Works</a></li>
                            <li>
                                <a href="#" class="desktop-item">Services</a>
                                <input type="checkbox" id="showMega" />
                                <label for="showMega" class="mobile-item">Mega Menu</label>
                                <div class="mega-box">
                                    <div class="content">
                                       
                                        <div class="row">
                                            <header>Design Services</header>
                                            <ul class="mega-links">
                                                <li><a href="#">Graphics</a></li>
                                                <li><a href="#">Vectors</a></li>
                                                <li><a href="#">Business cards</a></li>
                                                <li><a href="#">Custom logo</a></li>
                                            </ul>
                                        </div>
                                        <div class="row">
                                            <header>Email Services</header>
                                            <ul class="mega-links">
                                                <li><a href="#">Personal Email</a></li>
                                                <li><a href="#">Business Email</a></li>
                                                <li><a href="#">Mobile Email</a></li>
                                                <li><a href="#">Web Marketing</a></li>
                                            </ul>
                                        </div>
                                        <div class="row">
                                            <header>Security services</header>
                                            <ul class="mega-links">
                                                <li><a href="#">Site Seal</a></li>
                                                <li><a href="#">VPS Hosting</a></li>
                                                <li><a href="#">Privacy Seal</a></li>
                                                <li><a href="#">Website designs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                        <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
                    </div>

                </nav>

            </div >
        </div >
    )
}

export default Header