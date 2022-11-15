// import { css } from '@emotion/css';
import React from 'react';
// import Main from '../components/canvas/Main';
import MainCanvas from '../components/canvas/MainCanvas';
// import Header from '../components/common/Header';
import HeaderContainer from '../containers/header/HeaderContainer';
import TestPage from './TestPage';
import  styled  from '@emotion/styled';
import { css, keyframes } from '@emotion/css';

const stroke = keyframes`
0%   {
    fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1);
    stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
  }
  70%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); }
  80%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
  100% {
    fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1);
    stroke-dashoffset: -25%; stroke-dasharray: 50% 0;}
`;

const Svg = styled.svg`
    font-family: 'Karla', sans-serif;
    /* font-family: 'Sacramento', cursive; */
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Text = styled.text`
    font-family: 'Karla', sans-serif;
    /* font-family: 'Sacramento', cursive; */
    text-transform: uppercase;
    animation: ${stroke} 5s;
    stroke-width: 2;
    stroke: #365fa0;
    font-size: 120px;
`;

const MainPage = () => {
    return (
        <TestPage>
            <HeaderContainer />
            {/* <MainCanvas /> */}
            {/* <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet"> */}

            <Svg viewBox="0 0 1320 300">
                <Text x="28%" y="20%" dy=".35em" text-anchor="middle">
                    FOLAROID
                </Text>
            </Svg>
        </TestPage>
    );
};

export default MainPage;
