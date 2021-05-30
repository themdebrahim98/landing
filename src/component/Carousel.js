import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Member from './Member';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import './Carousel.css';
SwiperCore.use([Autoplay, Navigation]);

function Carousel() {
    const [item] = useState(Member);
    return (
        <div>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 1500,
                "disableOnInteraction": false
            }} navigation={true} className="mySwiper">
                {
                    item.map((elem) => {
                        const { name, position, image, comment, facebook, whatsapp, linkedin, github } = elem;
                        return (
                            <SwiperSlide className="slide-animation">
                                <div class="img-box">
                                    <img src={image} alt={name} />
                                </div>
                                <div className="text-box">
                                    {comment}
                                </div>
                                <div class="img-bio">
                                    <h4>{name}</h4>
                                    <h5>{position}</h5>
                                </div>
                                <div className="social">
                                    <a href={linkedin}><i class="fa fa-linkedin" style={{ color: "#0077b5" }}></i></a>
                                    <a href={github}><i class="fa fa-github" style={{ color: "#333" }}></i></a>
                                    <a href={facebook}><i class="fa fa-facebook" style={{ color: "	#4267B2" }}></i></a>
                                    <a href={whatsapp}><i class="fab fa-whatsapp" style={{ color: "	#25d366" }}></i></a>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel
