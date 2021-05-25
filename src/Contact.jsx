import React from 'react'
import Footer from './Footer'
import './Contact.css';
function Contact() {
    return (
        <div className="contact">
            <div className="container-fluid mt-5 contact-style">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <h1 class="text-center main-heading">Contact</h1>
                        <p class="text-center sub-heading">Stay tuned with us</p>
                        <div className="row">
                            <div className="col-md-6 col-12 sec1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <div className="container-fluid container-contact">
                <div className="form">
                    <div className="contact-info">
                        <div className="map">
                            <iframe title="googlemap"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5364405407695!2d88.41514321479247!3d22.596434685170458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c718a01a0d%3A0x5db3ee28f1b792d5!2sMaulana%20Abul%20Kalam%20Azad%20University%20of%20Technology%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1621324628279!5m2!1sen!2sin"
                                width="100%" height="200px" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className="contact-box">
                            <h3 className="title">Let's get in touch.</h3>
                            <p className="text">Lorem ipsum dolor corrupti quia voluptas distinctio molestias maiores repellat inventore illo,eligendi est aut labore ex iure.</p>
                            <div className="info">
                                <div className="information">
                                    <p className='icon'><i className="fal fa-map-marked-alt"></i></p>
                                    <p>Bakura, Puruliya west Bengal, 703234</p>
                                </div>
                                <div className="information">
                                    <p className='icon'><i className="fal fa-envelope"></i></p>
                                    <p>arghadeep123@gmail.com</p>
                                </div>
                                <div className="information">
                                    <p className='icon'><i className="fal fa-phone-alt"></i></p>
                                    <p>9771298843</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="index.html">
                            <h3 className="title">Contact Us</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label for="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label for="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="massaeg" className="input"></textarea>
                                <label for="">Massage</label>
                                <span>Massage</span>
                            </div>
                            <input type="submit" value="send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
