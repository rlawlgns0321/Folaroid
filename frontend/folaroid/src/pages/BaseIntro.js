import React from 'react';
import '../components/introduction/base_introduction.css';
import { Box } from '@mui/system';
import Sidebar from '../components/introduction/Sidebar';
import NameInput from '../components/introduction/NameInput';
import BirthInput from '../components/introduction/BirthInput';
import EmailInput from '../components/introduction/EmailInput';
import StackInput from '../components/introduction/StackInput';
import PhoneInput from '../components/introduction/PhoneInput';
import ImageInput from '../components/introduction/ImageInput';
import SchoolInput from '../components/introduction/SchoolInput';
import SloganInput from '../components/introduction/SloganInput';
import LanguageInput from '../components/introduction/LanguageInput';
import LinkInput from '../components/introduction/LinkInput';
import CertificateInput from '../components/introduction/CertificateInput'
import AwardInput from '../components/introduction/AwardInput'

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
