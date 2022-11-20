import React from 'react';

const FlexItem = ({project}) => {
    return (
        <article>
            <div className="inner">
                <div className="txt">
                    <h2>{project.pjtTitle}</h2>
                    <p>
                        {project.pjtSubtitle}
                    </p>
                </div>
                <figure>
                    <img src={project.pjtOneImageLocation} alt="1"></img>
                </figure>
            </div>
        </article>
    );
};

export default FlexItem;
