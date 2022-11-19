import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { portfolio } from '../../modules/portfolio';

const TemplateItem = styled.img`
    width: 80%;
    height: 18%;
    object-fit: cover;
    cursor: pointer;
    margin: auto;
    margin-top: 30px;
    border-radius: 10px;
    display: block;
    border: ${(props) => (props.isActive ? '2px solid #248bea' : '')};
`;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
`;

const TemplateSide = () => {
    const dispatch = useDispatch();
    const temNo = useSelector(
        (state) => state.portfolio.pf.portfolioTemplatesNo
    );

    const [active, setActive] = useState(temNo);

    const images = [
        { key: 1, src: '/images/template1.jpg' },
        { key: 2, src: '/images/template2.jpg' },
        { key: 3, src: '/images/template3.jpg' },
        { key: 4, src: '/images/template4.jpg' },
    ];

    const onClick = (key) => {
        setActive(key);
        dispatch(portfolio.actions.changeTemplatesNo(key));
    };

    const onSelectTemplate = (e) => {};
    return (
        <Wrap>
            {images.map((image) => (
                <TemplateItem
                    isActive={image.key === active}
                    key={image.key}
                    src={image.src}
                    alt="1"
                    onClick={() => onClick(image.key)}
                />
            ))}
        </Wrap>
    );
};

export default TemplateSide;
