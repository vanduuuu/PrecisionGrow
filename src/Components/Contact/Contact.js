import React from "react";
import contbg from "../../Assets/hero_4.webp";
import Banner from "../Banner/Banner";
import leaf2 from "../../Assets/16.png";
import india from "../../Assets/india-flag.webp";
import us from "../../Assets/us.png";
import "./Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <Banner title="Contact Us" backgroundImage={contbg} />
      <div className="con-in">
        <div class="sahpe-right-bottom">
          <img src={leaf2} alt="Image Not Found" />
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <form id="contactForm" class="cont-frm" action="" method="post">
                  <h5>Have Questions</h5>
                  <h2 className="mb-4">Send Us A Message</h2>
                  <div class="dbl-field">
                    <div class="field">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required=""
                      />
                      <i class="fas fa-user"></i>
                    </div>
                    <div class="field">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required=""
                      />
                      <i class="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div class="dbl-field">
                    <div class="field">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone"
                      />
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Enter your website"
                      />
                      <i class="fas fa-globe"></i>
                    </div>
                  </div>
                  <div class="message">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message"
                      required=""
                    ></textarea>
                    <i class="fa-solid fa-message"></i>
                  </div>
                  <div class="button-area">
                    <button class="text-white rounded" type="submit">
                      Get In Touch
                    </button>
                    <span></span>
                  </div>
                  <p id="statusMessage"></p>
                </form>
              </div>
              <div className="col-lg-6">
                <div class="contact-style-one-info cont">
                  <h2> Contact Information </h2>
                  <ul>
                    <li>
                      <div class="content">
                        <h5 class="title">
                          <i class="fas fa-building"></i> Regd Office:
                        </h5>
                        <p class="coleft">
                          <Link to="">
                            {" "}
                            B-155, Ground Floor, Vashi Plaza, Sector-17, Vashi,
                            Mumbai, 400703
                          </Link>
                        </p>
                      </div>
                      <div class="content coleft">
                        <h5 class="title">Project Office:</h5>
                        <p class="">
                          <Link to="">
                            {" "}
                            61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel,
                            Mumbai, 400012
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="content">
                        <h5 class="title">
                          <i class="fas fa-phone-alt"></i> Phone
                        </h5>
                        <ul class="country-flag">
                          <li>
                            <div class="icon-flag">
                              <img src={india} width="38px" alt="India" />
                            </div>
                            <div class="content">
                              <p class="pb-2">
                                <strong>INDIA</strong>
                              </p>

                              <strong>Phone :</strong>
                              <p>
                                <a href="tel:912248888888">+91 22 48888888</a> /{" "}
                                <a href="tel:912246165798">46165798</a>
                              </p>

                              <strong>Mobile :</strong>
                              <a href="tel:918097283444">+91 8097283444</a>
                            </div>
                          </li>
                          <li>
                            <div class="icon-flag">
                              <img src={us} width="38px" alt="us" />
                            </div>
                            <div class="content">
                              <p class="pb-2">
                                <strong>USA</strong>
                              </p>
                              <strong>Phone :</strong> <br />
                              <a href="tel:0014242390105">+1 424-239-0105</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div class="info">
                        <h5 class="title">
                          <i class="fas fa-envelope"></i> Email
                        </h5>
                        <p class="coleft">
                          <a href="mail@precisiongrow.co.in">
                            mail@precisiongrow.co.in
                          </a>{" "}
                          <br />
                          <a href="mail@precisiongrow.eu">
                            mail@precisiongrow.eu
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          </div>
          
        </section>
      </div>
      <div className="mapp">
      <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.87005805164!2d72.99598247596525!3d19.069449952176747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14bdd5000f5%3A0x2a58de08ba99c869!2sTech%20Visit!5e0!3m2!1sen!2sin!4v1725365345046!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default Contact;
