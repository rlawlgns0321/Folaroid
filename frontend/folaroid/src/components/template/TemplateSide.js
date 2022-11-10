import React from 'react';

const TemplateSide = () => {

    const change = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={change}/>
        </div>
    );
};

export default TemplateSide;