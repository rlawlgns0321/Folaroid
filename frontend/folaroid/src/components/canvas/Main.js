import React, { useState } from 'react';
import './Main.css';

const Main = () => {
    const [yOffset, setYOffset] = useState(0); // window.pageYOffset 대신 쓸 변수
    const [prevScrollHeight, setPrevScrollHeight] = useState(0); // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    const [currentScene, setCurrentScene] = useState(0); // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
    const [enterNewScene, setEnterNewScene] = useState(false); // 새로운 scene이 시작된 순간 true

    const sceneInfo = [
        {
            // 0
            type: 'sticky',
            heightNum: 3, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector(
                    '#scroll-section-0 .main-message.a'
                ),
                messageB: document.querySelector(
                    '#scroll-section-0 .main-message.b'
                ),
                pencilLogo: document.querySelector(
                    '#scroll-section-0 .pencil-logo'
                ),
                pencil: document.querySelector('#scroll-section-0 .pencil'),
                ribbonPath: document.querySelector('.ribbon-path path'),
            },
            values: {
                messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                messageB_opacity_in: [0, 1, { start: 0.4, end: 0.5 }],
                messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
                messageA_opacity_out: [1, 0, { start: 0.3, end: 0.4 }],
                messageB_opacity_out: [1, 0, { start: 0.6, end: 0.7 }],
                messageA_translateY_out: [0, -20, { start: 0.3, end: 0.4 }],
                pencilLogo_width_in: [1000, 200, { start: 0.1, end: 0.4 }],
                pencilLogo_width_out: [200, 50, { start: 0.4, end: 0.8 }],
                pencilLogo_translateX_in: [-10, -20, { start: 0.2, end: 0.4 }],
                pencilLogo_translateX_out: [-20, -50, { start: 0.4, end: 0.8 }],
                pencilLogo_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
                pencil_right: [-10, 70, { start: 0.3, end: 0.8 }],
                pencil_bottom: [-80, 100, { start: 0.3, end: 0.8 }],
                pencil_rotate: [-120, -200, { start: 0.3, end: 0.8 }],
                path_dashoffset_in: [1401, 0, { start: 0.2, end: 0.4 }],
                path_dashoffset_out: [0, -1401, { start: 0.6, end: 0.8 }],
            },
        },
    ];

    const [totalScrollHeight, setTotalScrollHeight] = useState(0);
    function setLayout() {
        // 각 스크롤 섹션의 높이 세팅
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight =
                    sceneInfo[i].heightNum * window.innerHeight;
            } else if (sceneInfo[i].type === 'normal') {
                // objs.content가 없는 경우, sceneInfo에 objs.content를 추가해야 합니다.
                // 예를들어 아래의 구조라면, content는 섹션의 내용을 통째로 감싸는 .description으로 지정해주시면 됩니다.
                // 강의에서 진행하는 메인 소스(main.js)에 구현되어 있는 부분을 참고하시면 쉽습니다.
                // <section class="scroll-section">
                //     <div class="description">
                //         lorem ipsum
                //     </div>
                // </section>
                sceneInfo[i].scrollHeight =
                    sceneInfo[i].objs.content.offsetHeight +
                    window.innerHeight * 0.5;
            }
            sceneInfo[
                i
            ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        setYOffset(window.pageYOffset);

        for (let i = 0; i < sceneInfo.length; i++) {
            setTotalScrollHeight(totalScrollHeight + sceneInfo[i].scrollHeight);
            if (totalScrollHeight >= yOffset) {
                setCurrentScene(i);
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    const [rv, setRv] = useState(null);

    function calcValues(values, currentYOffset) {
        // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        if (values.length === 3) {
            // start ~ end 사이에 애니메이션 실행
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if (
                currentYOffset >= partScrollStart &&
                currentYOffset <= partScrollEnd
            ) {
                setRv(
                    ((currentYOffset - partScrollStart) / partScrollHeight) *
                        (values[1] - values[0]) +
                        values[0]
                );
            } else if (currentYOffset < partScrollStart) {
                setRv(values[0]);
            } else if (currentYOffset > partScrollEnd) {
                setRv(values[1]);
            }
        } else {
            setRv(scrollRatio * (values[1] - values[0]) + values[0]);
        }

        return rv;
    }

    function playAnimation() {
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffset = yOffset - prevScrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        switch (currentScene) {
            case 1:
                if (scrollRatio <= 0.25) {
                    // in
                    objs.messageA.style.opacity = calcValues(
                        values.messageA_opacity_in,
                        currentYOffset
                    );
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(
                        values.messageA_translateY_in,
                        currentYOffset
                    )}%, 0)`;
                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(
                        values.messageA_opacity_out,
                        currentYOffset
                    );
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(
                        values.messageA_translateY_out,
                        currentYOffset
                    )}%, 0)`;
                }

                if (scrollRatio <= 0.55) {
                    // in
                    objs.messageB.style.opacity = calcValues(
                        values.messageB_opacity_in,
                        currentYOffset
                    );
                } else {
                    // out
                    objs.messageB.style.opacity = calcValues(
                        values.messageB_opacity_out,
                        currentYOffset
                    );
                }

                // 크기가 커져도 깨지지 않는 SVG의 장점을 살리기 위해 transform scale 대신 width를 조정
                if (scrollRatio <= 0.4) {
                    objs.pencilLogo.style.width = `${calcValues(
                        values.pencilLogo_width_in,
                        currentYOffset
                    )}vw`;
                    objs.pencilLogo.style.transform = `translate(${calcValues(
                        values.pencilLogo_translateX_in,
                        currentYOffset
                    )}%, -50%)`;
                } else {
                    objs.pencilLogo.style.width = `${calcValues(
                        values.pencilLogo_width_out,
                        currentYOffset
                    )}vw`;
                    objs.pencilLogo.style.transform = `translate(${calcValues(
                        values.pencilLogo_translateX_out,
                        currentYOffset
                    )}%, -50%)`;
                }

                // 빨간 리본 패스(줄 긋기)
                if (scrollRatio <= 0.5) {
                    objs.ribbonPath.style.strokeDashoffset = calcValues(
                        values.path_dashoffset_in,
                        currentYOffset
                    );
                } else {
                    objs.ribbonPath.style.strokeDashoffset = calcValues(
                        values.path_dashoffset_out,
                        currentYOffset
                    );
                }

                objs.pencilLogo.style.opacity = calcValues(
                    values.pencilLogo_opacity_out,
                    currentYOffset
                );
                objs.pencil.style.right = `${calcValues(
                    values.pencil_right,
                    currentYOffset
                )}%`;
                objs.pencil.style.bottom = `${calcValues(
                    values.pencil_bottom,
                    currentYOffset
                )}%`;
                objs.pencil.style.transform = `rotate(${calcValues(
                    values.pencil_rotate,
                    currentYOffset
                )}deg)`;

                break;
        }
    }

    function scrollLoop() {
        setEnterNewScene(false);
        setPrevScrollHeight(0);

        for (let i = 0; i < currentScene; i++) {
            setPrevScrollHeight(prevScrollHeight + sceneInfo[i].scrollHeight);
        }

        if (yOffset < prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            document.body.classList.remove('scroll-effect-end');
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            setEnterNewScene(true);
            if (currentScene === sceneInfo.length - 1) {
                document.body.classList.add('scroll-effect-end');
            }
            if (currentScene < sceneInfo.length - 1) {
                setCurrentScene(currentScene + 1);
            }
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if (yOffset < prevScrollHeight) {
            setEnterNewScene(true);
            // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
            if (currentScene === 0) return;
            setCurrentScene(currentScene - 1);
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if (enterNewScene) return;

        playAnimation();
    }

    window.addEventListener('load', () => {
        document.body.classList.remove('before-load');
        setLayout();

        window.addEventListener('scroll', () => {
            setYOffset(window.pageYOffset);
            scrollLoop();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                setLayout();
            }
        });

        window.addEventListener('orientationchange', () => {
            setTimeout(setLayout, 500);
        });

        document
            .querySelector('.loading')
            .addEventListener('transitionend', (e) => {
                document.body.removeChild(e.currentTarget);
            });
    });

    return (
        <div className="container">
            <section className="scroll-section" id="scroll-section-0" style={{height: '2781px'}}>
                <h1>Folaroid</h1>
                <object className="sticky-elem pencil-logo" data="./pencil-logo.svg" type="image/svg+xml"></object>
                <div className="sticky-elem main-message a">
                    <p>Let's make portfolio</p>
                </div>
                <span className="sticky-elem ribbon-path">
                    <svg
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 700 450"
                    >
                        <path
                            className="st1"
                            d="M709,41.5c-194,38-387,122-455,159c-64.13,34.89-73.4,42.42,20,26c82.5-14.5,126.34-33.68,185-38 c47.5-3.5,69.22,7.98-11,39c-75,29-251,98-459,169"
                        ></path>
                    </svg>
                </span>
                <div className="sticky-elem main-message b">
                    <p>AWWWWWSOME!</p>
                </div>
            </section>
            <div className="normal-content">
                <section>
                    <p className="mid-message">포트폴리오 작성</p>
                </section>
            </div>
        </div>
    );
};

export default Main;
