import React from 'react';

const FlexIntro = ({ intro }) => {
    return (
        <article>
            <div className="inner">
                <div className="txt">
                    <h2>자기소개</h2>
                    <p>
                        {intro.introSlogan.sloganContent}
                    </p>
                </div>
                <figure>
                    <img src={intro.introImage.introImageLocation} alt="1"></img>
                </figure>
            </div>
        </article>
    );
};

export default FlexIntro;
