import React from 'react';

const MusicArticle = ({deg, isActive}) => {


    return (
        <article className={`${(isActive ? 'on': '')}`}  style={{transform:`rotate(${deg}deg) translateY(-100vh)`}}>
            <div className="inner">
                <div className="pic" style={{background:`url(/images/1.jpg)`}}>
                    {/* <div className="dot"></div> */}
                </div>

                <div className="txt">
                    <h2>Blizzards</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
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
