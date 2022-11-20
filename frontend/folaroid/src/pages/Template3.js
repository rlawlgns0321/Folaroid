import React from 'react';
import {Unity, useUnityContext} from 'react-unity-webgl';
import IntroTemplate3 from '../components/template/IntroTemplate3';


const Template3 = () => {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: 'public_assets/unity_assets/template-art-museum/Releases.loader.js',
        dataUrl: 'public_assets/unity_assets/template-art-museum/Releases.data',
        frameworkUrl: 'public_assets/unity_assets/template-art-museum/Releases.framework.js',
        codeUrl: 'public_assets/unity_assets/template-art-museum/Releases.wasm',
    });

    return (
        <div className="template3">
            <Unity
                style={{
                    height: '100%',
                    justifySelf: 'center',
                    alignSelf: 'center',
                    width: '100%',
                }}
                unityProvider={unityProvider}
            ></Unity>
            {/* <IntroTemplate3></IntroTemplate3> */}
        </div>
    );
};

export default Template3;
