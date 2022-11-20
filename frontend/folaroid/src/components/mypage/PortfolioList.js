import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import PortfolioItemContainer from '../../containers/portfolio/PortfolioItemContainer';
import AlertDialog from '../dialog/AlertDialog';

const Wrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TitleBtn = styled.button`
    width: 100%;
    height: 10%;
    background-color: #248bea;
    border: 0;
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ContentsWrap = styled.div`
    width: 100%;
    height: 90%;
    max-height: 90%;
    overflow-y: scroll;
`;

const PortfolioList = ({ portfolioList, onCreateClick }) => {
    return (
        <Wrap>
            <TitleBtn onClick={() => onCreateClick()}>
                포트폴리오 만들기
            </TitleBtn>
            <ContentsWrap>
                <AnimatePresence>
                    {portfolioList &&
                        portfolioList.map((pf, key) => {
                            return (
                                <PortfolioItemContainer key={pf.pfNo} pf={pf} />
                            );
                        })}
                </AnimatePresence>
            </ContentsWrap>
        </Wrap>
    );
};

export default PortfolioList;
