import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import SpaceItem from './SpaceItem';

const ani = keyframes`
0% { transform: rotateY(0deg);}
100% { transform: rotateY(360deg);}
`;

const Wrap = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    perspective: 1300px;
    color: #ddd;
    background: #000;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    opacity: 0.5;
`;
const Circle = styled.section`
    width: 600px;
    height: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -400px;
    margin-left: -300px;
    transform-style: preserve-3d;
    animation: ${ani} linear 30s infinite;
`;

const Item1 = styled(SpaceItem)`
    transform: rotateY(0deg) translateZ(-764px);
`;
const Item2 = styled(SpaceItem)`
    transform: rotateY(45deg) translateZ(-764px);
`;
const Item3 = styled(SpaceItem)`
    transform: rotateY(90deg) translateZ(-764px);
`;
const Item4 = styled(SpaceItem)`
    transform: rotateY(135deg) translateZ(-764px);
`;
const Item5 = styled(SpaceItem)`
    transform: rotateY(180deg) translateZ(-764px);
`;
const Item6 = styled(SpaceItem)`
    transform: rotateY(225deg) translateZ(-764px);
`;
const Item7 = styled(SpaceItem)`
    transform: rotateY(270deg) translateZ(-764px);
`;
const Item8 = styled(SpaceItem)`
    transform: rotateY(315deg) translateZ(-764px);
`;
const Space = () => {
    const circle = useRef();

    const mouseEnter = () => {
        circle.current.style.animationPlayState = 'paused';
    }

    const mouseLeave = () => {
        circle.current.style.animationPlayState = 'running';
    }

    return (
        <Wrap>
            <Video src="/videos/bg.mp4" autoPlay muted loop></Video>
            <Circle ref={circle}>
                <Item1 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}/>
                <Item2 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                <Item3 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                <Item4 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                <Item5 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                <Item6 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                <Item7 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                <Item8 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
            </Circle>
        </Wrap>
    );
};

export default Space;
