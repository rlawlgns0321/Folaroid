import React from "react";
import Unity, {UnityContext} from "react-unity-webgl";


const unityContext = new UnityContext ({
  loaderUrl: "Build/release.loader.js",
  dataUrl: "Build/release.data",
  frameworkUrl: "Build/release.framework.js",
  codeUrl: "Build/release.wasm",
})

const Template3 = () => {
    return (
        <div className="template3">
            <Unity style={{
                width: '90%',
                height: '100%',
                justifySelf: 'center',
                alignSelf: 'center',
            }}
            unityContext={unityContext}></Unity>
        </div>
    );
}

export default Template3;