import React from "react";
import './base_introduction.css';
import InputComponent from './input_component'

function SignUp(props) {
    const title = '기본정보';

    return (
        <>
        <div className="base-intro-header">{title}</div>
        <InputComponent></InputComponent>
        </>
    );
}

export default SignUp;