import React, { useEffect, useRef } from 'react';
import './Template10.css';
import styled from 'styled-components';

function Template10() {
    const outerDivRef = useRef();
    // const  DIVIDER_HEIGHT = 5;
    const DIVIDER_HEIGHT = window.innerHeight;

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current;
            const pageHeight = window.innerHeight;

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
                    // 현재 1페이지
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    console.log('1 -> 2, DOWN', scrollTop, pageHeight * 2);
                } else if (
                    scrollTop >= pageHeight + DIVIDER_HEIGHT &&
                    scrollTop < pageHeight * 4
                ) {
                    // 현재 2페이지
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    console.log(
                        '2 -> 3, DOWN',
                        scrollTop,
                        pageHeight + DIVIDER_HEIGHT
                    );
                } else {
                    // 현재 3페이지
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
                        left: 0,
                        behavior: 'smooth',
                    });
                    console.log(
                        '3 -> 4, DOWN',
                        scrollTop,
                        pageHeight + DIVIDER_HEIGHT
                    );
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop <= pageHeight * 2) {
                    //현재 1페이지
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    console.log(
                        '2 -> 1, UP',
                        scrollTop,
                        pageHeight + DIVIDER_HEIGHT
                    );
                } else if (
                    scrollTop > pageHeight + DIVIDER_HEIGHT &&
                    scrollTop <= pageHeight * 4
                ) {
                    // 현재 2페이지
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    console.log(
                        '3 -> 2, UP',
                        scrollTop,
                        pageHeight + DIVIDER_HEIGHT
                    );
                } else {
                    // 현재 3페이지
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    console.log(
                        '4 -> 3',
                        scrollTop,
                        pageHeight + DIVIDER_HEIGHT
                    );
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        };
    }, []);

    const Dot = ({ num, scrollIndex }) => {
        return(
            <div
              style={{
                width: 10,
                height: 10,
                border: "1px solid black",
                borderRadius: 999,
                backgroundColor: scrollIndex ===num ? "black" : "transparent",
                transitionDuration: 1000,
                transition: "background-color 0.5s",
              }}
              ></div>
        );
    };

    return (
        <div ref={outerDivRef} className="outer">
            <div className="inner bg-yellow">1</div>
            <div className="divider"></div>
            <div className="inner bg-blue">2</div>
            <div className="divider"></div>
            <div className="inner bg-pink">3</div>
            <div className="divider"></div>
            <div className="inner bg-black">4</div>
        </div>
    );
}

export default Template10;
