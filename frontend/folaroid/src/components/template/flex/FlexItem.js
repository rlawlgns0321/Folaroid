import React, { useState } from 'react';
import ProjectDialog from '../../dialog/ProjectDialog';

const FlexItem = ({ project }) => {
    const [openPjt, setOpenPjt] = useState(false);

    const handleClick = () => {
        if (!project.intro) setOpenPjt(true);
    };

    const handleClose = () => {
        setOpenPjt(false);
    };

    return (
        <>
            <article onClick={handleClick}>
                <div className="inner">
                    <div className="txt">
                        <h2>{project.pjtTitle}</h2>
                        <p>{project.pjtSubtitle}</p>
                    </div>
                    <figure>
                        <img src={project.pjtOneImageLocation} alt="1"></img>
                    </figure>
                </div>
            </article>
            <ProjectDialog
                open={openPjt}
                handleClose={handleClose}
                project={project}
            />
        </>
    );
};

export default FlexItem;
