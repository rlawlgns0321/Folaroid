import React from 'react';
import './base_introduction.css';
import { Box } from '@mui/system';
import Sidebar from './sidebar';
import NameInput from './name_input';
import BirthInput from './birth_input';
import EmailInput from './email_input';
import StackInput from './stack_input';
import PhoneInput from './phone_input';
import ImageInput from './image_input';
import SchoolInput from './school_input';
import SloganInput from './slogan_input';

function SignUp(props) {
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
      </div>
    </Box>
  );
}

export default SignUp;
