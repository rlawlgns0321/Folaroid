import React from 'react';

const MusicArticle = ({deg, isActive, project}) => {


    return (
        <article className={`${(isActive ? 'on': '')}`}  style={{transform:`rotate(${deg}deg) translateY(-100vh)`}}>
            <div className="inner">
                <div className="pic" style={{background:`url(${project.pjtOneImageLocation})`, objectFit: 'cover'}}>
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
    );
};

export default MusicArticle;
