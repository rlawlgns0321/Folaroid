import React from 'react';
import { css } from '@emotion/css';
import Header from '../components/common/Header';
import SearchInput from '../components/others/SearchInput';
import styled from '@emotion/styled';

const Page = styled.div`
    width:100%;
    height: 100%;
    /* background-color: black; */
`;

const OthersPage = () => {
    
    return (
        <div>

            <Header />
        <Page>
            <div style={{ margin: '20px' }}>
                <SearchInput></SearchInput>
            </div>
        </Page>
        </div>
    );
};

export default OthersPage;
