import React from "react";
import Unity, {UnityContext} from "react-unity-webgl";


const unityContext = new UnityContext ({
  loaderUrl: "Build/Releases.loader.js",
  dataUrl: "Build/Releases.data",
  frameworkUrl: "Build/Releases.framework.js",
  codeUrl: "Build/Releases.wasm",
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