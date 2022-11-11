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
    border-bottom: 1px solid #248BEA;
    font-size: 1.7rem;
    font-weight: bold;
    color: #248BEA;
    padding-left: 10px;
    display: flex;
    align-items: center;
`;

const ContentsWrap = styled.div`
    width:100%;
    height: 90%;
    max-height: 90%;
    overflow-y: scroll;
`;

const MyInfo = () => {
    return (
        <Wrap>
            <Title>내 프로필</Title>
            <ContentsWrap>
                <BaseInfo/>
                <CommitChart/>
            </ContentsWrap>
        </Wrap>
    );
};

export default MyInfo;
