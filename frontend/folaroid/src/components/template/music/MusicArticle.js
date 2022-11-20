import React, { useEffect, useRef, useState } from 'react';
import { BasicModal } from '../introTemplate1';

const MusicArticle = ({ deg, isActive, project }) => {
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

    let content = null;
    
    if (project.intro) {
        content = (
            <article
                className={`${isActive ? 'on' : ''}`}
                style={{ transform: `rotate(${deg}deg) translateY(-100vh)` }}
            >
                <div
                    className="inner"
                    onClick={() => {
                        handleOpen();
                    }}
                >
                    <div
                        className="pic"
                        style={{
                            background: `url(${project.pjtOneImageLocation})`,
                            objectFit: 'cover',
                        }}
                    ></div>

                    <div className="txt">
                        <h2>{project.pjtTitle}</h2>
                        <p>{project.pjtSubtitle}</p>
                        <ul>
                            <li className="pause">
                                <i className="fas fa-pause"></i>
                            </li>
                            <li className="play">
                                <i className="fas fa-play"></i>
                            </li>
                            <li className="load">
                                <i className="fas fa-redo-alt"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <BasicModal
                    open={open}
                    handleClose={handleClose}
                    scroll={scroll}
                    project={project}
                />
            </article>
        );
    } else {
        content = (
            <article
                className={`${isActive ? 'on' : ''}`}
                style={{ transform: `rotate(${deg}deg) translateY(-100vh)` }}
            >
                <div className="inner">
                    <div
                        className="pic"
                        style={{
                            background: `url(${project.pjtOneImageLocation})`,
                            objectFit: 'cover',
                        }}
                    ></div>

                    <div className="txt">
                        <h2>{project.pjtTitle}</h2>
                        <p>{project.pjtSubtitle}</p>
                        <ul>
                            <li className="pause">
                                <i className="fas fa-pause"></i>
                            </li>
                            <li className="play">
                                <i className="fas fa-play"></i>
                            </li>
                            <li className="load">
                                <i className="fas fa-redo-alt"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        );
    }
    return content;
};

export default MusicArticle;
