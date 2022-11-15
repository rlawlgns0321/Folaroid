import styled from '@emotion/styled';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Wrap = styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0.0625rem solid #9e9e9e;
`;

const Font = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
`;

const CommitChart = ({ baseIntro }) => {
    return (
        <Wrap>
            <Font>COMMIT LOG</Font>
            <GitHubCalendar username={baseIntro.userGithubId} />
        </Wrap>
    );
};

export default CommitChart;
