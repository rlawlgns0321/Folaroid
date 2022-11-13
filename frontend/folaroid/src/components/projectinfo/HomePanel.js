import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';

const Wrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 1.4rem;
    color: #248bea;
    font-weight: bold;
    letter-spacing: 3px;
`;

const TitleInput = styled.input`
    border: 0;
    font-size: 1.6rem;
    color: white;
    font-weight: bold;
    letter-spacing: 3px;
    background-color: inherit;
    outline: none;
    border-left: 4px solid #248bea;
    padding-left: 15px;
`;

const TitleWrap = styled.div`
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 20px;
`;

const DescriptionWrap = styled.div`
    height: 50%;
    margin-top: 20px;
`;

const DescriptionArea = styled.textarea`
    height: 300px;
    width: 100%;
    background-color: inherit;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    border: none;
`;

const HomePanel = observer(({ store }) => {
    return (
        <Wrap>
            <Title>대표사진</Title>
            <TitleWrap>
                <Title>프로젝트명</Title>
                <TitleInput type="text" />
            </TitleWrap>
            <DescriptionWrap>
                <Title>프로젝트 설명</Title>
                <DescriptionArea />
            </DescriptionWrap>
        </Wrap>
    );
});

export default HomePanel;
