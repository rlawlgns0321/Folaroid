import React, { useEffect, useRef, useState } from 'react';
import './Template10.css';
import { Stage, Layer, Path} from 'react-konva';
import Konva from 'konva';

function Template10() {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    const DIVIDER_HEIGHT = window.innerHeight;
    const bag = Konva.Util.getRandomColor();

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
                    setScrollIndex(2);
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
                    setScrollIndex(3);
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
                    setScrollIndex(4);
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
                    setScrollIndex(1);
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
                    setScrollIndex(2);
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
                    setScrollIndex(3);
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
        return (
            <div
                style={{
                    width: 5,
                    height: scrollIndex === num ? 20 : 5,
                    border: '1px solid black',
                    borderRadius: 999,
                    backgroundColor:
                        scrollIndex === num ? bag : 'transparent',
                    transitionDuration: 1000,
                    transition: 'All 0.5s',
                }}
            ></div>
        );
    };

    const Dots = ({ scrollIndex }) => {
        return (
            <div style={{ position: 'fixed', top: '50%', right: 100 }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 20,
                        height: 100,
                    }}
                >
                    <Dot num={1} scrollIndex={scrollIndex}></Dot>
                    <Dot num={2} scrollIndex={scrollIndex}></Dot>
                    <Dot num={3} scrollIndex={scrollIndex}></Dot>
                    <Dot num={4} scrollIndex={scrollIndex}></Dot>
                </div>
            </div>
        );
    };

    
    return (
        <div ref={outerDivRef} className="outer">
            <Dots scrollIndex={scrollIndex}></Dots>
            <div className="inner bg-yellow">1</div>
            <div style={{ background: bag }}>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer></Layer>
                </Stage>
            </div>
            <div className="inner bg-blue">2</div>
            <div style={{ background: bag }}>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer></Layer>
                </Stage>
            </div>
            <div className="inner bg-pink">3</div>
            <div style={{ background: bag }}>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer></Layer>
                </Stage>
            </div>
            <div className="inner bg-black">4</div>
        </div>
    );
}

export default Template10;
