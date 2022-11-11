import styled from '@emotion/styled';
import React from 'react';
import MyInfo from './MyInfo';
import PortfolioInfo from './PortfolioInfo';

const Wrap = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    border-radius: 10px;
    border: 1px solid #2C2B2B;
    flex-direction: row;
`;

const LeftContent = styled.div`
    width: 50%;
    height: 100%;
    max-height: 100%;
    display: flex;
    background-color: #2c2b2b;
    border-radius: 10px 0 0 10px;
    overflow-y: scroll;
`;

const RightContent = styled.div`
    width: 50%;
    height: 100%;
    max-height: 100%;
    display: flex;
    border-radius: 0 10px 10px 0;
    backdrop-filter: blur(10px);
    overflow-y: scroll;
`;

const WrapLayout = () => {
    return (
        <Wrap>
            <LeftContent>
                <MyInfo/>
            </LeftContent>
            <RightContent>
                <PortfolioInfo/>
            </RightContent>
        </Wrap>
    );
};

export default WrapLayout;
