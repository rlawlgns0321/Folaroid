import React, { useState } from 'react';
import ProjectDialog from '../../dialog/ProjectDialog';

const MusicArticle = ({ deg, isActive, project }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        console.log('asdf)');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <article
                className={`${isActive ? 'on' : ''}`}
                style={{ transform: `rotate(${deg}deg) translateY(-100vh)` }}
                onClick={handleClick}
            >
                <div className="inner">
                    <div
                        className="pic"
                        style={{
                            background: `url(${project.pjtOneImageLocation})`,
                            objectFit: 'cover',
                        }}
                    >
                        {/* <div className="dot"></div> */}
                    </div>

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
            <ProjectDialog
                open={open}
                handleClose={handleClose}
                project={project}
            />
        </>
    );
};

export default MusicArticle;
