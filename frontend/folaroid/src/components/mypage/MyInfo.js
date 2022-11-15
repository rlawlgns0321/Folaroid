import styled from '@emotion/styled';
import React from 'react';
import BaseInfo from './BaseInfo';
import CommitChart from './CommitChart';

const Wrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #248bea;
    font-size: 1.7rem;
    font-weight: bold;
    color: #248bea;
    padding-left: 10px;
    display: flex;
    align-items: center;
`;

const ContentsWrap = styled.div`
    width: 100%;
    height: 90%;
    max-height: 90%;
    overflow-y: scroll;
`;

const MyInfo = ({ baseIntro, image }) => {
    return (
        <Wrap>
            <Title>내 프로필</Title>
            <ContentsWrap>
                <BaseInfo baseIntro={baseIntro} image={image} />
                <CommitChart baseIntro={baseIntro} />
            </ContentsWrap>
        </Wrap>
    );
};

export default MyInfo;
