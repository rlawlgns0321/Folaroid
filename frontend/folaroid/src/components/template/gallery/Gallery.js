import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import 'swiper/css';
import './style.css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Gallery = () => {

    return (
        <div className="wrap">
            <h1>
                UI/UX <span>PORTFOLIO</span>
            </h1>

            <ul className="auto">
                <li className="btnStart">
                    <i className="fas fa-play"></i>
                </li>
                <li className="btnStop">
                    <i className="fas fa-pause"></i>
                </li>
            </ul>

            <Swiper
                direction="horizontal"
                loop
                pagination={{ el: '.swiper-pagination', type: 'fraction' }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={0}
                slidesPerView='auto'
                grabCursor
                centeredSlides
                speed={1000}
                effect='coverflow'
                coverflowEffect={{
                    rotate: 50,
                    stretch: -100,
                    depth: 400,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{ delay: 1000, disableOnInteraction: true }}
            >
                <SwiperSlide>
                    <div className="inner">
                        <div className="con">
                            <img src="/images/1.jpg" alt="1" />
                            <h2>Ipsum dolor sit amet.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, optio.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inner">
                        <div className="con">
                        <img src="/images/1.jpg" alt="1" />
                            <h2>Lorem ipsum dolor.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati eum doloribus
                                voluptate officiis excepturi!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inner">
                        <div className="con">
                        <img src="/images/1.jpg" alt="1" />
                            <h2>Dolor ipsum sit.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi officiis iste nam
                                quae.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inner">
                        <div className="con">
                        <img src="/images/1.jpg" alt="1" />
                            <h2>Consectetur adicing.</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Velit optio debitis sapiente!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="inner">
                        <div className="con">
                        <img src="/images/1.jpg" alt="1" />
                            <h2>Dicta! elit. </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Eos, accusantium corrupti.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <div className="swiper-pagination"></div>
        </div>
    );
};

export default Gallery;
