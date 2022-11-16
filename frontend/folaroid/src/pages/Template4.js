import React from "react";
import Unity, {UnityContext} from "react-unity-webgl";


const unityContext = new UnityContext ({
  loaderUrl: "public_assets/unity_assets/template-movie-theater/Releases.loader.js",
  dataUrl: "public_assets/unity_assets/template-movie-theater/Releases.data",
  frameworkUrl: "public_assets/unity_assets/template-movie-theater/Releases.framework.js",
  codeUrl: "public_assets/unity_assets/template-movie-theater/Releases.wasm",
})

const Template4 = () => {
    return (
        <div className="template4">
            <Unity style={{
                width: '100%',
                height: '100%',
                justifySelf: 'center',
                alignSelf: 'center',
            }}
            unityContext={unityContext}></Unity>
        </div>
    );
}

export default Template4;