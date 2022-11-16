import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import IntroTemplate3 from '../components/template/IntroTemplate3';

const unityContext = new UnityContext({
    loaderUrl: 'public_assets/unity_assets/template-art-museum/Releases.loader.js',
    dataUrl: 'public_assets/unity_assets/template-art-museum/Releases.data',
    frameworkUrl: 'public_assets/unity_assets/template-art-museum/Releases.framework.js',
    codeUrl: 'public_assets/unity_assets/template-art-museum/Releases.wasm',
});

const Template3 = () => {
    return (
        <div className="template3">
            <Unity
                style={{
                    width: '90%',
                    height: '100%',
                    justifySelf: 'center',
                    alignSelf: 'center',
                }}
                unityContext={unityContext}
            ></Unity>
            <IntroTemplate3></IntroTemplate3>
        </div>
    );
};

export default Template3;
