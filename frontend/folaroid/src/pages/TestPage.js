import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/css';

const drift = keyframes`
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
`;

const Box = styled.div`
    width: 100vw;
    height: 100vh;
    border-radius: 5px;
    box-shadow: 0 2px 30px rgba(black, 0.2);
    background: linear-gradient(#042aff, #3c5aff);
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
`;

const Wave = styled.div`
    position: absolute;
    top: -170%;
    left: -15%;
    background: rgba(3, 169, 244, 0.8);
    width: 130%;
    height: 260%;
    transform-origin: 50% 48%;
    border-radius: 63%;
    animation: ${drift} 3000ms infinite linear;
`;

const Wave2 = styled(Wave)`
    animation: ${drift} 7000ms infinite linear;
    background: rgba(34, 79, 242, 0.8); ;
`;

const Wave3 = styled(Wave)`
    animation: ${drift} 5000ms infinite linear;
    background: #00002b;
`;

const Wrap = styled.div`
    background-color: #1c1d22;
    color: rgba(255, 255, 255, 0.6);
`;

const ContentBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;
const TestPage = ({children}) => {
    return (
        <Wrap>
            <Box>
                <Wave />
                <Wave2 />
                <Wave3 />
                <ContentBox>{children}</ContentBox>
            </Box>
        </Wrap>
    );
};

export default TestPage;
