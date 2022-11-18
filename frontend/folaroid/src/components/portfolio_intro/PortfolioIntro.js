import React, { useEffect } from 'react';
// import '../introduction/base_introduction.css';
import { Grid } from '@mui/material';
import PersonalInput from '../introduction/PersonalInput';
import ActivityInput from '../introduction/ActivityInput';
import StackInput from '../introduction/StackInput';
import ImageInput from '../introduction/ImageInput';
import SchoolInput from '../introduction/SchoolInput';
import SloganInput from '../introduction/SloganInput';
import LanguageInput from '../introduction/LanguageInput';
import ArchivingInput from '../introduction/ArchivingInput';
import CertificateInput from '../introduction/CertificateInput';
import AwardInput from '../introduction/AwardInput';
import CareerInput from '../introduction/CareerInput';

function BaseIntro() {


    return (
        <Grid>
            <PersonalInput ></PersonalInput>
            <ImageInput ></ImageInput>
            <SloganInput ></SloganInput>
            <StackInput ></StackInput>
            <SchoolInput ></SchoolInput>
            <LanguageInput ></LanguageInput>
            <ArchivingInput ></ArchivingInput>
            <CertificateInput ></CertificateInput>
            <AwardInput ></AwardInput>
            <ActivityInput ></ActivityInput>
            <CareerInput ></CareerInput>
        </Grid>
    );
}

export default BaseIntro;
