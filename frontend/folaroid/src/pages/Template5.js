import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useRef, useState } from 'react';
import {
    OrbitControls,
    Environment,
    useGLTF,
    Float,
    PivotControls,
    QuadraticBezierLine,
    Backdrop,
    ContactShadows,
    Stars,
    useCursor,
} from '@react-three/drei';

export function Astronaut(props) {
    const glb = useLoader(GLTFLoader, 'models/astronaut.glb');
    const [hovered, set] = useState();
    useCursor(hovered /*'pointer', 'auto'*/);
    return (
        <group {...props} dispose={null}>
            <primitive
                object={glb.scene}
                scale={3}
                onClick={handleClick}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
            />
            <meshPhongMaterial />
        </group>
    );
}
function handleClick(e) {
    console.log('Click');
}
const Template5 = () => {
    const spaceman = useRef();

    return (
        <div style={{ height: '100vh' }}>
            <Canvas
                shadows
                camera={{ position: [0, 1, 3] }}
                style={{ backgroundColor: 'black' }}
            >
                <Stars
                    radius={300}
                    depth={60}
                    count={10000}
                    factor={30}
                    saturation={10}
                    fade={true}
                />
                <ambientLight intensity={0.2} />
                <directionalLight intensity={0.2} />
                <spotLight position={[5, 0, 5]} intensity={0.5} castShadow />

                <Float
                    scale={0.75}
                    //position={[0, 0.65, 0]}
                    floatIntensity={5}
                    rotationIntensity={2}
                    //rotation={[0, 0.6, 0]}
                >
                    <Astronaut scale={0.2}>
                        <object3D position={[0, 10, 0]} ref={spaceman} />
                    </Astronaut>
                </Float>

                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Template5;
