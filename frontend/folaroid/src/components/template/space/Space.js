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

const Space = ({ items }) => {
    const circle = useRef();

    const mouseEnter = () => {
        circle.current.style.animationPlayState = 'paused';
    };

    const mouseLeave = () => {
        circle.current.style.animationPlayState = 'running';
    };

    return (
        <Wrap>
            <Video src="/videos/bg.mp4" autoPlay muted loop></Video>
            <Circle ref={circle}>
                {items.map((project, key) => (
                    <SpaceItem
                        key={key}
                        project={project}
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                        deg={key*45}
                    />
                ))}
            </Circle>
        </Wrap>
    );
};

Space.defaultProps = {
    items: [
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Blizzards',
            pjtSubtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            pjtOneImageLocation: '/images/1.jpg',
        },
    ],
};

export default Space;
