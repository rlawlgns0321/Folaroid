import React, { useEffect, useRef, useState } from 'react';
import BasicModal from '../introTemplate1';

const FlexIntro = ({ intro }) => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('');
    const handleOpen = () => {
        setOpen(true);
        setScroll();
    };
    const handleClose = () => setOpen(false);
    const descriptionElementRef = useRef(null);

    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <article>
            <div
                className="inner"
                onClick={() => {
                    handleOpen();
                }}
            >
                <div className="txt">
                    <h2>자기소개</h2>
                    <p>{intro.introSlogan.sloganContent}</p>
                </div>
                <figure>
                    <img
                        src={intro.introImage.introImageLocation}
                        alt="1"
                    ></img>
                </figure>
            </div>
            <BasicModal
                project={intro}
                handleClose={handleClose}
                scroll={scroll}
                open={open}
            />
        </article>
    );
};

export default FlexIntro;
