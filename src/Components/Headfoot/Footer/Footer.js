import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import tractor from '../../../Assets/7.png'
import footlogo from '../../../Assets/logo.webp'
import nasscom from '../../../Assets/nasscom.png'
import Assocham_India from '../../../Assets/Assocham_India.png'
import cii from '../../../Assets/cii.png'
import ficci from '../../../Assets/ficci.png'
import ifoam from '../../../Assets/ifoam.png'
import sap from '../../../Assets/sap-b1.webp'
function Footer() {
  return (
    <>
    <div class="support"> 
            <p>We Make Farming Better With Remote Sensing  Data For Partnership Contact Us At <a href="mailto:mail@precisiongrow.co.in"><span class="hglt">mail@precisiongrow.co.in</span></a></p>
            <p className="p-0 m-0">For Support Contact Us For <a href="mailto:support@precisiongrow.co.in"><span class="hglt">support@precisiongrow.co.in</span></a></p>
            </div>
      <footer className="footer" style={{backgroundImage:'../../../Assets/16.png'}}>
        <div className="foot-newsletter">
            
        </div>
        <div className="container">
          <h2 className="text-whitee 
          text-center mb-5">
            Agriculture Meets Technology with
            Precision Grow
          </h2>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="widget1">
                <div className="footerlogo">
                  <img src={footlogo} className="img-fluid mb-4 rounded" loading="lazy" alt="" />
                </div>
                <h5>Powered By</h5>
                <img src={sap} alt="sap icon" className="w-50 rounded mb-4"/>
                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link to="https://www.facebook.com/electroniccrop/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow/">
                        <i className="fab fa-twitter"> </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/electronic-crop/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/electronic_crop/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 footer-here-is">
              <h5>Get in Touch and Start Your Journey to Success</h5>
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Regd. Office :</h6></li>
                    <li>
                    Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi,
                    Mumbai, Mumbai City, Maharashtra, 400703
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Project Office :</h6></li>
                    <li>
                      61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel,
                      Mumbai, 400012
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mt-5 text-white">
                <div class="col-lg-7 mb-5 col-md-12">
                  <ul>
                    <li>
                      <img
                        class="imgh"
                        src="https://precisiongrow.co.in/assets/img/icon/india-flag.webp"
                        alt=""
                        loading="lazy"
                      />
                      <span>India</span>
                    </li>
                    <li>
                      <span>PHONE</span> : +91 22 48888888 / 46165798
                    </li>
                    <li>
                      <span>MOBILE</span> : +91 8097283444
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 col-md-12 mb-5">
                  <ul>
                    <li>
                      <img
                        class="imgh"
                        src="https://precisiongrow.co.in/assets/img/icon/us.png"
                        alt=""
                        loading="lazy"
                      />
                      <span>USA</span>
                    </li>
                    <li>
                      <span>PHONE</span> : +1 424-239-0105
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 offset-md-2 col-lg-2 offset-lg-1">
              <div className="widget4">
                <h5>Explore</h5>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="https://precisiongrowindia.blogspot.com/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-certified text-center">
                <div class="row">
                    <ul>
                        <li><img class="logo-certi" src={nasscom} alt="nasscom"/></li>
                        <li><img class="logo-certi" src={Assocham_India}alt="Assocham_India"/></li>
                        <li><img class="logo-certi" src={cii} alt="cii"/></li>
                        <li><img class="logo-certi" src={ficci} alt="ficci"/></li>
                        <li><img class="logo-certi" src={ifoam} alt="ifoam"/></li>
                    </ul>

                </div>
            </div>
        </div>
        <div className="copyRightArea">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-md-left mb-3 mb-md-0">
                <p>
                  &copy; 2024. All Rights Reserved by Precision Grow (A Unit of
                  Tech Visit IT Pvt Ltd)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="shape-right-bottom">
            <img src={tractor} alt="Image Not Found"/>
        </div>
      </footer>
    </>
  );
}
export default Footer;
