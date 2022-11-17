import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import BaseIntroContainer from '../../containers/personal/BaseIntroContainer';
import PortfolioListContainer from '../../containers/portfolio/PortfolioListContainer';

const Wrap = styled(motion.div)`
    width: 80%;
    height: 80%;
    display: flex;
    border-radius: 10px;
    border: 1px solid #2c2b2b;
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

const container = {
    hidden: { opacity: 1, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const WrapLayout = () => {
    return (
        <Wrap
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <LeftContent>
                <BaseIntroContainer />
            </LeftContent>
            <RightContent>
                <PortfolioListContainer />
            </RightContent>
        </Wrap>
    );
};

export default WrapLayout;
