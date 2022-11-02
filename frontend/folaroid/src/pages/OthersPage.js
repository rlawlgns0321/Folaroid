import React from 'react';
import '../components/introduction/base_introduction.css';
import { Box } from '@mui/system';
import {
    Sidebar,
    NameInput,
    BirthInput,
    EmailInput,
    StackInput,
    PhoneInput,
    ImageInput,
    SchoolInput,
    SloganInput,
    LanguageInput,
    LinkInput,
    CertificateInput,
    AwardInput
} from '../components/introduction';


function BaseIntro() {
    const title = '기본정보';

    return (
        <Box style={{ display: 'flex', margin: '10px' }}>
            <Sidebar></Sidebar>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <div className="base-intro-header" style={{ width: '100%' }}>
                    {title}
                </div>
                <NameInput></NameInput>
                <BirthInput></BirthInput>
                <EmailInput></EmailInput>
                <PhoneInput></PhoneInput>
                <ImageInput></ImageInput>
                <SloganInput></SloganInput>
                <StackInput></StackInput>
                <SchoolInput></SchoolInput>
                <LanguageInput></LanguageInput>
                <LinkInput></LinkInput>
                <CertificateInput></CertificateInput>
                <AwardInput></AwardInput>
            </div>
        </Box>
    );
}

export default BaseIntro;
