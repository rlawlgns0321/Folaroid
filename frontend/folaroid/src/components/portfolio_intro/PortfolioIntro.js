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
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findByPfNo } from '../../modules/intro/personal';

function BaseIntro() {
    const personal = useSelector((state) => state.personal)
    const { pfNo } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findByPfNo(pfNo));
    }, [dispatch, pfNo]);
    
    console.log(personal.pfNoIntro)


    return (
        <Grid>
            <PersonalInput pfIntro_no={personal.pfNoIntro}></PersonalInput>
            <ImageInput pfIntro_no={personal.pfNoIntro}></ImageInput>
            <SloganInput pfIntro_no={personal.pfNoIntro}></SloganInput>
            <StackInput pfIntro_no={personal.pfNoIntro}></StackInput>
            <SchoolInput pfIntro_no={personal.pfNoIntro}></SchoolInput>
            <LanguageInput pfIntro_no={personal.pfNoIntro}></LanguageInput>
            <ArchivingInput pfIntro_no={personal.pfNoIntro}></ArchivingInput>
            <CertificateInput pfIntro_no={personal.pfNoIntro}></CertificateInput>
            <AwardInput pfIntro_no={personal.pfNoIntro}></AwardInput>
            <ActivityInput pfIntro_no={personal.pfNoIntro}></ActivityInput>
            <CareerInput pfIntro_no={personal.pfNoIntro}></CareerInput>
        </Grid>
    );
}

export default BaseIntro;
