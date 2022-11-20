import React, { useState, useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const Template4 = ({ template }) => {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl:
            '/public_assets/unity_assets/template-movie-theater/Releases.loader.js',
        dataUrl:
            '/public_assets/unity_assets/template-movie-theater/Releases.data',
        frameworkUrl:
            '/public_assets/unity_assets/template-movie-theater/Releases.framework.js',
        codeUrl:
            '/public_assets/unity_assets/template-movie-theater/Releases.wasm',
    });

    const [visible, setVisible] = useState(true);

    function handleClickSpawnEnemies() {
        sendMessage("JSONDataManager", "getJson", JSON.stringify(template));
        setVisible((prev) => !prev);
    }

    useEffect(() => {
        console.log("GetWhat");
        sendMessage("JSONDataManager", "getJson", JSON.stringify(template));
        console.log(JSON.stringify(template));
    }, []);

    
    return (
        <>
        {visible && (<button onClick={handleClickSpawnEnemies}>Press TO Continue</button>)}
            <Unity
                style={{
                    width: '100%',
                    height: '100%',
                    justifySelf: 'center',
                    alignSelf: 'center',
                }}
                unityProvider={unityProvider}
            />
        </>
    );

    
};

export default Template4;
