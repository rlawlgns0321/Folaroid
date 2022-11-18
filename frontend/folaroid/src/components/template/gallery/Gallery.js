import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ani = keyframes`
	0% {
		opacity: 0;
		transform: scale(1);
	}
	1% {
		opacity: 0.5;
	}
	100% {
		opacity: 0;
		transform: scale(1.4);
	}
`;

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    background: linear-gradient(45deg, #ac8bef, #2ddbdc);
    & h1 {
        font-weight: normal;
        font-size: 24px;
        font-family: 'orbitron';
        color: #fff;
        letter-spacing: 1px;
        position: absolute;
        left: 50px;
        top: 70px;
        & span {
            opacity: 0.8;
        }
    }
    & .auto {
        position: absolute;
        bottom: 60px;
        left: 60px;
        z-index: 20;
        & li {
            float: left;
            margin-right: 20px;
            cursor: pointer;
            color: #fff;
            font-size: 20px;
            opacity: 0.9;
            transition: all 0.5s;
            &:hover {
                opacity: 1;
                transform: scale(1.4);
            }
        }
    }
`;

const SwiperWrapper = styled(Swiper)`
    width: 100%;
    height: 100%;

    & .swiper-slide-active .inner {
        opacity: 1;
        box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.8);
        ::before {
            animation: ${ani} 1s ease 1;
        }
        ::after {
            animation: ${ani} 1s ease 0.3s 1;
        }
        & .con h2 {
            ::after {
                width: 100px;
            }
        }
    }
    & .swiper-slide-prev .inner,
    .swiper-slide-next .inner {
        opacity: 0.7;
    }
`;

const Slide = styled(SwiperSlide)`
    width: 500px;
    height: 500px;
    position: relative;
    top: 50%;
    margin-top: -230px;
    & .inner {
        width: 100%;
        height: 100%;
        background: #fff;
        padding: 30px;
        box-sizing: border-box;
        opacity: 0.4;
        transition: 1s;
        ::before,
        ::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            opacity: 0;
            background: #fff;
        }
        & .con {
            position: relative;
            z-index: 10;
            & img {
                width: 100%;
            }
            & h2 {
                font-weight: normal;
                font-size: 40px;
                font-family: 'roboto';
                color: #111;
                margin-top: 15px;
                margin-bottom: 20px;
                ::after {
                    content: '';
                    display: block;
                    width: 30px;
                    height: 1px;
                    background-color: #888;
                    margin-top: 15px;
                    transition: 1s 0.5s;
                }
            }
            & p {
                font-weight: normal;
                font-size: 13px;
                font-family: 'arial';
                line-height: 1.3;
                color: #aaa;
                letter-spacing: 1px;
            }
        }
    }
`;

const SwiperButtonPrev = styled.div`
    left: auto;
    right: 100px;
    top: auto;
    bottom: 50px;
    filter: grayscale(100%) brightness(3);
    transform: scale(0.5);
`;

const SwiperButtonNext = styled.div`
    left: auto;
    right: 60px;
    top: auto;
    bottom: 50px;
    filter: grayscale(100%) brightness(3);
    transform: scale(0.5);
`;

const SwipperPagination = styled.div`
    bottom: auto;
    top: 50px;
    left: auto;
    right: 50px;
    width: auto;
    font-size: 16px;
    font-family: 'orbitron';
    letter-spacing: 1px;
    color: #eee;

    & span:nth-of-type(1) {
        font-size: 30px;
        color: #fff;
    }
`;

const Gallery = () => {
    return (
        <Wrap>
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

            <SwiperWrapper>
                <Slide>
                    <div className="inner">
                        <div className="con">
                            <img src="/images/1.jpg" />
                            <h2>Ipsum dolor sit amet.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, optio.
                            </p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div className="inner">
                        <div className="con">
                            <img src="/images/1.jpg" />
                            <h2>Ipsum dolor sit amet.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, optio.
                            </p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div className="inner">
                        <div className="con">
                            <img src="/images/1.jpg" />
                            <h2>Ipsum dolor sit amet.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, optio.
                            </p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div className="inner">
                        <div className="con">
                            <img src="/images/1.jpg" />
                            <h2>Ipsum dolor sit amet.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, optio.
                            </p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div className="inner">
                        <div className="con">
                            <img src="/images/1.jpg" />
                            <h2>Ipsum dolor sit amet.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, optio.
                            </p>
                        </div>
                    </div>
                </Slide>
            </SwiperWrapper>

            <SwiperButtonPrev></SwiperButtonPrev>
            <SwiperButtonNext></SwiperButtonNext>

            <SwipperPagination></SwipperPagination>
        </Wrap>
    );
};

export default Gallery;
