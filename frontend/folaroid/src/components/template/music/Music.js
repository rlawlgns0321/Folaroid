import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MusicArticle from './MusicArticle';

const ani = keyframes`
0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const ani2 = keyframes`
0% {
		transform: translateY(10%) rotate(0deg);
	}
	100% {
		transform: translateY(10%) rotate(360deg);
	}
`;

const Figure = styled.figure`
    width: 100%;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(25deg, violet, pink);

    & .menu {
        position: absolute;
        top: 8vh;
        right: 4vw;
        font-size: 24px;
        color: #fff;
    }
    & > p {
        position: absolute;
        bottom: 7vh;
        left: 50%;
        transform: translateX(-50%);
        font: 12px/1 'arial';
        color: #fff;
        letter-spacing: 2px;
        opacity: 0.8;
    }
    & .btnPrev {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-20vw, -50%);
        display: flex;
        align-items: center;
        text-align: left;
        cursor: pointer;
        & span {
            font: 11px/1 'arial';
            color: #fff;
            opacity: 1;
            transform: translateX(30%);
            transition: 0.5s;
        }
        ::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 0px;
            transform-origin: left center;
            transform: rotate(-180deg);
            transition: 0.5s;
        }
        ::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #fff;
            position: absolute;
            bottom: 50%;
            left: 0px;
            transform-origin: left center;
            transform: rotate(180deg);
            transition: 0.5s;
        }
        &:hover {
            & span {
                opacity: 0;
                transform: translateX(100%);
            }
            ::before {
                transform: rotate(-30deg);
            }
            ::after {
                transform: rotate(30deg);
            }
        }
    }
    & .btnNext {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(20vw, -50%);
        display: flex;
        align-items: center;
        text-align: right;
        cursor: pointer;
        & span {
            font: 11px/1 'arial';
            color: #fff;
            opacity: 1;
            transform: translateX(-30%);
            transition: 0.5s;
        }
        ::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 0px;
            transform-origin: right center;
            transform: rotate(180deg);
            transition: 0.5s;
        }
        ::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #fff;
            position: absolute;
            bottom: 50%;
            left: 0px;
            transform-origin: right center;
            transform: rotate(-180deg);
            transition: 0.5s;
        }
        &:hover {
            & span {
                opacity: 0;
                transform: translateX(-100%);
            }
            ::before {
                transform: rotate(30deg);
            }
            ::after {
                transform: rotate(-30deg);
            }
        }
    }
`;

const H1 = styled.h1`
    position: absolute;
    top: 7vh;
    left: 4vw;
    font-size: 0;
    & strong {
        font-size: 36px;
        font-family: 'arial';
        color: #fff;
        line-height: 1.4;
        letter-spacing: 1px;
    }
    & span {
        font-size: 12px;
        font-family: 'arial';
        color: #fff;
        opacity: 0.8;
        line-height: 1;
        letter-spacing: 1px;
    }
`;

const Section = styled.section`
    width: 20vw;
    height: 65vh;
    position: absolute;
    left: 50%;
    top: 140%;
    margin-top: -25vh;
    margin-left: -10vw;
    transition: 1s; /* 11단계 */

    & article {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        & .inner {
            width: 100%;
            height: 100%;
            background: #f0f7ff;
            padding: 5vh 2.5vw 8vh;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-content: space-between; /*자식 콘텐츠의 안쪽 세로 여백을 균등 배치*/
            flex-wrap: wrap;
            border-radius: 10px;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
            opacity: 0.6; /*투명도를 낮춰서 비활성화*/
            transform: scale(0.8); /*축소시켜서 비솰성화*/
            transition: opacity 1s, transform 1s; /* 7단계 */

            & .pic {
                width: 15vw;
                height: 15vw;
                margin: 0px auto;
                border-radius: 50%;
                background-repeat: no-repeat;
                background-position: 200%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                ::before,
                ::after {
                    content: '';
                    display: block;
                    width: inherit;
                    height: inherit;
                    border-radius: inherit;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    background-image: inherit;
                    background-position: center;
                    background-repeat: inherit;
                    background-size: cover;
                    transform-origin: center center;
                }
                ::before {
                    transform: translateY(10%);
                    filter: blur(20px) brightness(1.6);
                }
                & .dot {
                    width: 3vw;
                    height: 3vw;
                    border-radius: 50%;
                    background: #e4f1ff;
                    position: relative;
                    z-index: 3;
                    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
                }
                &.on::after {
                    animation: ${ani} 4s linear infinite;
                }
                &.on::before {
                    animation: ${ani2} 4s linear infinite;
                }
            }

            & .txt {
                text-align: center;
                position: relative;
                z-index: 3;
                & h2 {
                    font-size: 20px;
                    font-family: 'arial';
                    color: #222;
                    margin-bottom: 2vh;
                }
                & p {
                    font-size: 12px;
                    margin-bottom: 3vh;
                    color: #777;
                }
                & ul {
                    display: flex;
                    justify-content: space-around;
                    & li {
                        cursor: pointer;
                        opacity: 0.6;
                        transition: 0.5s;
                        &.play {
                            transform: scale(1.5);
                            opacity: 0.9;
                            :hover {
                                transform: scale(2);
                                opacity: 1;
                            }
                        }
                        &:hover {
                            transform: scale(1.5);
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
        &.on .inner {
            opacity: 0.9; /* 7단계 */
            transform: scale(1.1); /* 7단계 */
        }
    }
`;

const Music = () => {
    const deg = 45;
    const [num, setNum] = useState(0);
    const [active, setActive] = useState(0);
    const articles = [0, 1, 2, 3, 4, 5, 6, 7];

    const onPrev = () => {
        setNum(num - 1);
        setActive(active === 7 ? 0 : active + 1);
    };

    const onNext = () => {
        setNum(num + 1);
        setActive(active === 0 ? 7 : active - 1);
    };

    return (
        <Figure>
            <H1>
                <strong>DCODELAB</strong> <br />
                <span>UI/UX DESIGN & DEVELOPMENT</span>
            </H1>

            <a href="#" className="menu">
                <i className="fas fa-bars"></i>
            </a>

            <Section style={{ transform: `rotate(${deg * num}deg)` }}>
                {articles.map((value, key) => (
                    <MusicArticle
                        key={key}
                        isActive={key === active}
                        deg={deg * key}
                    />
                ))}
            </Section>

            <div className="btnPrev" onClick={onPrev}>
                <span>PREV MUSIC</span>
            </div>
            <div className="btnNext" onClick={onNext}>
                <span>NEXT MUSIC</span>
            </div>

            <p>2021 Designed by DCODELAB</p>
        </Figure>
    );
};

export default Music;
