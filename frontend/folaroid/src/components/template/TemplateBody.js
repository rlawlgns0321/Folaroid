import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 0 10px 0;
`;

const TemplateBody = () => {
    const temNo = useSelector(
        (state) => state.portfolio.pf.portfolioTemplatesNo
    );

    const urls = ['', 'music', 'space', 'flex', 'gallery', 'tem4'];

    return (
        <Iframe
            src={`https://folaroid.com/${urls[temNo]}`}
            width="100%"
            height="100%"
            title="tem"
        ></Iframe>
    );
};

export default TemplateBody;
