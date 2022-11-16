import React, { useState } from 'react';

const TemplateSide = () => {
    const [template, setTemplate] = useState('')

    const handleChange = (e) => {
    }
    return (
        <div>
            <button onClick={handleChange}>
                <img src="./tem1.png" />
            </button>
        </div>
    );
};

export default TemplateSide;
