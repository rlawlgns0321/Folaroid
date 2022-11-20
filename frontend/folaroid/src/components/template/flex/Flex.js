import React from 'react';
import styled from 'styled-components';
import FlexIntro from './FlexIntro';
import FlexItem from './FlexItem';

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background: #333;
    display: flex;
`;

const Header = styled.header`
    width: 20%;
    height: 100%;
    padding: 10vh 5vw;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between; /*세로축은 상단 하단 양끝으로 콘텐츠를 배치*/
    justify-content: center; /*가로축은 가운대로 배치*/
    position: relative;
    z-index: 3; /*section요소와 aside팝업요소보다 위에 배치하기위해 3 지정*/
    & > h1 {
        font-size: 0px;
        color: #fff;
    }
    & > h1 > i {
        font-size: 5vw;
        margin-bottom: 15px;
    }
    & > h1 > span {
        font: normal 0.8vw/1 'arial';
    }
    & > address {
        font: normal 11px/1.2 'arial';
        color: #888;
    }
`;

const Nav = styled.nav`
    position: absolute;
    top: 10vh;
    right: 5vw;
    z-index: 3; /*section요소와 aside팝업요소보다 위에 배치하기위해 3 지정*/

    & > ul {
        display: flex;
    }
    & > ul > li > a {
        font-size: 18px;
        color: #bbb;
        margin-right: 30px;
    }
`;

const Section = styled.section`
    width: 80%;
    height: 100%;
    padding-top: 15vh;
    display: flex;
    position: relative;
    z-index: 1; /*aside팝업요소보다 아래 배치하기위해 1 지정*/

    & > article {
        flex: 1; /*모든 article 요소의 너비를 동등하게 적용*/
        padding: 70px 40px 100px;
        position: relative;
        opacity: 0.6;
        z-index: 1;
        transition: opacity 1s, flex 1s;
        cursor: pointer;
        &:hover {
            flex: 1.5; /*호버 된 요소만 1.5배 너비를 증가*/
            opacity: 1;
            z-index: 2;
            ::before {
                left: 0px;
                opacity: 1;
            }
            & > .inner > .txt {
                width: 75%;
            }
            & > .inner > .txt > h2 {
                font-size: 5vw;
                padding-top: 0px;
                ::after {
                    width: 120px;
                    background: orange;
                }
            }
            & > .inner > figure {
                height: 25vh;
                filter: saturate(120%);
                transform: translateY(3vh);
            }
        }

        ::before {
            content: '';
            display: block;
            width: 80%;
            height: 95%;
            position: absolute;
            background: #444;
            top: 0px;
            left: -200px; /*마우스 호버 전 article의 왼쪽 바깥쪽에 배치*/
            opacity: 0; /*마우스 호버 전 투명하게 숨김 처리*/
            transition: 1s;
        }
        & > .inner {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between; /*.txt와 figure 요소를 위 아래 끝에 배치*/
            position: relative; /*::bofore 요소 위쪽으로 배치되게 하기 위해 position 처리 */
            & > .txt {
                width: 100%;
                transition: 0.5s; /*호버시 전환효과 처리 */
                & > h2 {
                    font: normal 2vw/1 'Alegreya Sans SC';
                    color: #fff;
                    margin-bottom: 40px;
                    padding-top: 70px;
                    transition: 1s; /*호버시 전환효과 처리 */
                    ::after {
                        content: '';
                        display: block;
                        width: 40px;
                        height: 2px;
                        background: #777;
                        margin-top: 20px;
                        transition: 1.5s;
                    }
                }
                & > p {
                    font: 14px/1.4 'arial';
                    color: #999;
                }
            }
            & > figure {
                width: 100%;
                height: 15vh;
                background: #777;
                overflow: hidden;
                box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
                filter: saturate(10%); /*영상박스의 채도를 낮춤*/
                transform-origin: left center; /*왼쪽 방향 기준으로 변형이 일어나도록 중심축 변경*/
                transition: 1s;
                & > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /*영상이 figure 영역안에 꽉 차도록 설정*/
                    transform: scale(
                        1.1
                    ); /*영상 가장자리의 여백을 숨기기위해 약간 확대*/
                }
            }
        }
    }
`;

const Aside = styled.aside`
    width: 100%;
    height: 100vh;
    background: #222;
    position: absolute;
    top: 0px;
    left: -100%; /*왼쪽 화면 바깥에 배치*/
    opacity: 0; /*투명도 0으로 비활성화*/
    z-index: 2; /*2로 설정하며 section은 덮고 h1과 nav는 aside 위쪽에 배치*/
    padding: 20vh 7vw 14vh 20vw;
    display: flex;
    justify-content: space-between; /*자식 요소인 .txt와 figure를 좌우 양 끝에 배치 */
    transition: 1s; /*전환효과 설정*/
    &.on {
        opacity: 1;
        left: 0%; /*왼쪽 바깥에서 화면 안쪽으로 이동하도록 설정*/
    }
    & > .txt {
        width: 25%;
        height: 100%;
        & > h1 {
            font: normal 6vw/1 'Alegreya Sans SC';
            color: #ddd;
            margin-bottom: 20px;
        }
        & > p {
            font: 1.1vw/1.3 'arial';
            color: #666;
            margin-bottom: 60px;
        }
        & > span {
            cursor: pointer;
            color: orange;
        }
    }
    & > figure {
        width: 72%;
        height: 100%;
        & > video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const Flex = ({ intro, items, pfName }) => {
    console.log(items);

    return (
        <Main>
            <Header>
                <h1>
                    <i className="fab fa-firstdraft"></i>
                    <br />
                    <span>{pfName}</span>
                </h1>

                <address>
                    FOLAROID
                    <br />
                    ALL RIGHT RESERVED.
                </address>
            </Header>

            <Nav>
                <ul>
                    <li>
                        <a>
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className="fas fa-search"></i>
                        </a>
                    </li>
                </ul>
            </Nav>

            <Section>
                <FlexIntro intro={intro} />
                {items.map((project, key) => (
                    <FlexItem key={key} project={project} />
                ))}
            </Section>

            <Aside>
                <div className="txt">
                    <h1>01</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <span>CLOSE</span>
                </div>
                <figure>
                    <video src="vids/vid1.mp4" loop muted></video>
                </figure>
            </Aside>
        </Main>
    );
};

Flex.defaultProps = {
    pfName:"FOLAROID",
    items: [
        {
            pjtTitle: '01',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: '02',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: '03',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
    ],
    intro: {
        pjtTitle: '03',
        introContent: null,
        introImage: {
            introImageNo: 2,
            introImageLocation: '/images/1.jpg',
        },
        introSlogan: {
            introSloganNo: 2,
            sloganContent:
                'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        },
    },
};

export default Flex;
