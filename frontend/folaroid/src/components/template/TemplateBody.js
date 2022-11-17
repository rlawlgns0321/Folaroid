import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 10px 10px 0;
`;

const TemplateBody = () => {
    return (
        <Iframe src='http://127.0.0.1:3000/space' width='100%' height="100%" title='tem'>
            
        </Iframe>
    );
};

export default TemplateBody;