import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

const drift = keyframes`
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
`;

const Box = styled.div`
    width: 100vw;
    height: 100vh;
    border-radius: 5px;
    box-shadow: 0 2px 30px rgba(black, 0.2);
    background: lighten(#f0f4c3, 10%);
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(#e8a, 1),
            rgba(#def, 0) 80%,
            rgba(white, 0.5)
        );
        z-index: 11;
        transform: translate3d(0, 0, 0);
    }
`;

const Wave = styled.div`
    opacity: 0.4;
    position: absolute;
    top: -170%;
    left: -15%;
    background: #0af;
    width: 130%;
    height: 260%;
    transform-origin: 50% 48%;
    border-radius: 63%;
    animation: ${drift} 3000ms infinite linear;
`;

const Wave2 = styled(Wave)`
    animation: ${drift} 7000ms infinite linear;
    opacity: 0.1;
    background: yellow;
`;

const Wave3 = styled(Wave)`
    animation: ${drift} 5000ms infinite linear;
`;
const TestPage = () => {
    return (
        <div>
            <Box>
                <Wave />
                <Wave2 />
                <Wave3 />
                asdf
            </Box>
        </div>
    );
};

export default TestPage;
