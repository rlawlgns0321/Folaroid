import React from 'react';
import Header from '../components/common/Header';
import SearchInput from '../components/others/SearchInput';
import PortFolioBox from '../components/others/PortfolioBox';
import TestPage from './TestPage';


const OthersPage = () => {
    return (
        <TestPage>
            {/* <style>{'body { background-color: black; }'}</style> */}
            <Header />
            <div style={{ backgroundColor: 'black'}}>
                <div style={{ margin: '20px' }}>
                    <SearchInput></SearchInput>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <PortFolioBox></PortFolioBox>
                </div>
            </div>
        </TestPage>
    );
};

export default OthersPage;
