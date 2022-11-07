import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { OrbitControls, Stars } from '@react-three/drei';

const Template2 = () => {
    return (
        <>
            <Canvas
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    background: 'black',
                }}
            >
                <Stars
                    radius={300}
                    depth={60}
                    count={20000}
                    factor={7}
                    saturation={0}
                    fade={true}
                />
                <pointLight position={[10, 10, 10]} />
            </Canvas>
        </>
    );
};

export default Template2;
