import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sKarmakar from './images/sourav_karmakar.jpg';
import aSharma from './images/amanSharma.jpeg';
import sSony from './images/sudhanshu.jpeg';
import sOjha from './images/SumanOjha.png';
import aMallick from './images/Arghadeep.jpg';
import './Carousel.css';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import { IconButton } from '@material-ui/core';
SwiperCore.use([Autoplay, Navigation]);

function Carousel() {
    return (
        <div>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 1000,
                "disableOnInteraction": false
            }} loop={true} loopFillGroupWithBlank={true} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div class="img-box">
                        <img src={sKarmakar} alt="" />
                    </div>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a error, perspiciatis et quis molestiae officiis repellendus quasi doloribus nostrum, odio expedita dolorem aspernatur. Illo corrupti mollitia assumenda ipsam accusantium?
                    </div>
                    <div class="img-bio">
                        <h3>sourav karmakar</h3>
                        <h5>Head</h5>
                    </div>
                    <div className="social">
                        <IconButton><a href="https://www.linkedin.com/"><i class="fa fa-linkedin" style={{ color: "#0077b5" }}></i></a></IconButton>
                        <IconButton><a href="https://github.com"><i class="fa fa-github" style={{ color: "#333" }}></i></a></IconButton>
                        <IconButton><a href="https://facebook.com"><i class="fa fa-facebook" style={{ color: "	#4267B2" }}></i></a></IconButton>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="img-box">
                        <img src={aMallick} alt="" />
                    </div>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a error, perspiciatis et quis molestiae officiis repellendus quasi doloribus nostrum, odio expedita dolorem aspernatur. Illo corrupti mollitia assumenda ipsam accusantium?
                    </div>
                    <div class="img-bio">
                        <h3>arghadeep mallick</h3>
                        <h5>Manager</h5>
                    </div>
                    <div className="social">
                        <IconButton><a href="https://www.linkedin.com/"><i class="fa fa-linkedin" style={{ color: "#0077b5" }}></i></a></IconButton>
                        <IconButton><a href="https://github.com"><i class="fa fa-github" style={{ color: "#333" }}></i></a></IconButton>
                        <IconButton><a href="https://facebook.com"><i class="fa fa-facebook" style={{ color: "	#4267B2" }}></i></a></IconButton>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="img-box">
                        <img src={sSony} alt="" />
                    </div>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a error, perspiciatis et quis molestiae officiis repellendus quasi doloribus nostrum, odio expedita dolorem aspernatur. Illo corrupti mollitia assumenda ipsam accusantium?
                    </div>
                    <div class="img-bio">
                        <h3>sudhanshu kumar</h3>
                        <h5>Manager</h5>
                    </div>
                    <div className="social">
                        <IconButton><a href="https://www.linkedin.com/"><i class="fa fa-linkedin" style={{ color: "#0077b5" }}></i></a></IconButton>
                        <IconButton><a href="https://github.com"><i class="fa fa-github" style={{ color: "#333" }}></i></a></IconButton>
                        <IconButton><a href="https://facebook.com"><i class="fa fa-facebook" style={{ color: "	#4267B2" }}></i></a></IconButton>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="img-box">
                        <img src={sOjha} alt="" />
                    </div>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a error, perspiciatis et quis molestiae officiis repellendus quasi doloribus nostrum, odio expedita dolorem aspernatur. Illo corrupti mollitia assumenda ipsam accusantium?
                    </div>
                    <div class="img-bio">
                        <h3>suman ojha</h3>
                        <h5>Manager</h5>
                    </div>
                    <div className="social">
                        <IconButton><a href="https://www.linkedin.com/"><i class="fa fa-linkedin" style={{ color: "#0077b5" }}></i></a></IconButton>
                        <IconButton><a href="https://github.com"><i class="fa fa-github" style={{ color: "#333" }}></i></a></IconButton>
                        <IconButton><a href="https://facebook.com"><i class="fa fa-facebook" style={{ color: "	#4267B2" }}></i></a></IconButton>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="img-box">
                        <img src={aSharma} alt="" />
                    </div>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a error, perspiciatis et quis molestiae officiis repellendus quasi doloribus nostrum, odio expedita dolorem aspernatur. Illo corrupti mollitia assumenda ipsam accusantium?
                    </div>
                    <div class="img-bio">
                        <h3>aman sharma</h3>
                        <h5>Manager</h5>
                    </div>
                    <div className="social">
                        <IconButton><a href="https://www.linkedin.com/"><i class="fa fa-linkedin" style={{ color: "#0077b5" }}></i></a></IconButton>
                        <IconButton><a href="https://github.com"><i class="fa fa-github" style={{ color: "#333" }}></i></a></IconButton>
                        <IconButton><a href="https://facebook.com"><i class="fa fa-facebook" style={{ color: "	#4267B2" }}></i></a></IconButton>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="img-box">
                        <img src="https://raw.githubusercontent.com/sksony-234/tempRepl/master/slide2/img/ebrahim.jpeg" alt="" />
                    </div>
                    <div className="text-box">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias a error, perspiciatis et quis molestiae officiis repellendus quasi doloribus nostrum, odio expedita dolorem aspernatur. Illo corrupti mollitia assumenda ipsam accusantium?
                    </div>
                    <div class="img-bio">
                        <h3>md. ebrahim</h3>
                        <h5>Manager</h5>
                    </div>
                    <div className="social">
                        <IconButton><a href="https://www.linkedin.com/"><i class="fa fa-linkedin" style={{ color: "#0077b5" }}></i></a></IconButton>
                        <IconButton><a href="https://github.com"><i class="fa fa-github" style={{ color: "#333" }}></i></a></IconButton>
                        <IconButton><a href="https://facebook.com"><i class="fa fa-facebook" style={{ color: "	#4267B2" }}></i></a></IconButton>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Carousel
