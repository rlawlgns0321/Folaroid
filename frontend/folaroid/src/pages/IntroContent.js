import React from 'react';
import PersonalInput from '../components/introduction/PersonalInput';
import ImageInput from '../components/introduction/ImageInput';
import SloganInput from '../components/introduction/SloganInput';
import { ReadStack, StackInput } from '../components/introduction/StackInput';
import {
    ReadSchool,
    SchoolInput,
} from '../components/introduction/SchoolInput';
import {
    ReadLanguage,
    LanguageInput,
} from '../components/introduction/LanguageInput';
import {
    ReadArchiving,
    ArchivingInput,
} from '../components/introduction/ArchivingInput';
import {
    ReadCertificate,
    CertificateInput,
} from '../components/introduction/CertificateInput';
import { AwardInput, ReadAwards } from '../components/introduction/AwardInput';
import {
    ActivityInput,
    ReadActivity,
} from '../components/introduction/ActivityInput';
import {
    ReadCareer,
    CareerInput,
} from '../components/introduction/CareerInput';
import { useSelector } from 'react-redux';

function BaseIntro() {
    const introSelector = useSelector((state) => state.introSelector);

    return (
        <div>
            <PersonalInput></PersonalInput>
            <ImageInput></ImageInput>
            {introSelector.slogan && (
                <SloganInput select={introSelector.slogan}></SloganInput>
            )}
            {introSelector.stack && (
                <StackInput select={introSelector.stack}></StackInput>
            )}
            <ReadStack></ReadStack>
            {introSelector.school && (
                <SchoolInput select={introSelector.school}></SchoolInput>
            )}
            <ReadSchool></ReadSchool>
            {introSelector.language && (
                <LanguageInput select={introSelector.language}></LanguageInput>
            )}
            <ReadLanguage></ReadLanguage>
            {introSelector.archiving && <ArchivingInput></ArchivingInput>}
            <ReadArchiving></ReadArchiving>
            {introSelector.certification && (
                <CertificateInput></CertificateInput>
            )}
            <ReadCertificate></ReadCertificate>
            {introSelector.awards && <AwardInput></AwardInput>}
            <ReadAwards></ReadAwards>
            {introSelector.activity && <ActivityInput></ActivityInput>}
            <ReadActivity></ReadActivity>
            {introSelector.career && <CareerInput></CareerInput>}
            <ReadCareer></ReadCareer>
        </div>
    );
}

export default BaseIntro;
