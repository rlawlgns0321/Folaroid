import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';

export function Planet1() {
    const pastelMap = useTexture('images/planet1.jpg');
    const planetRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        planetRef.current.rotation.y = elapsedTime / 6;
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <mesh
                ref={planetRef}
                position={[10, -1, -7]}
                receiveShadow
                scale={1}
            >
                <sphereGeometry args={[1, 36, 50]} />

                <meshStandardMaterial
                    map={pastelMap}
                    metalness={0.3}
                    roughness={0.6}
                />
            </mesh>
        </>
    );
}
export function Planet2() {
    const pastelMap = useTexture('images/planet3.jpg');
    const planetRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        planetRef.current.rotation.y = elapsedTime / 6;
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <mesh
                ref={planetRef}
                position={[25, 10, -25]}
                receiveShadow
                scale={1}
            >
                <sphereGeometry args={[1, 50, 50]} />

                <meshStandardMaterial
                    map={pastelMap}
                    metalness={0.3}
                    roughness={0.6}
                />
            </mesh>
        </>
    );
}
export function Planet3() {
    const pastelMap = useTexture('images/planet4.jpg');
    const planetRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        planetRef.current.rotation.y = elapsedTime / 6;
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <mesh
                ref={planetRef}
                position={[-5, 10, -25]}
                receiveShadow
                scale={1}
            >
                <sphereGeometry args={[1, 50, 50]} />

                <meshStandardMaterial
                    map={pastelMap}
                    metalness={0.3}
                    roughness={0.6}
                />
            </mesh>
        </>
    );
}
export function Planet4() {
    const pastelMap = useTexture('images/planet3.png');
    const planetRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        planetRef.current.rotation.y = elapsedTime / 0.2;
    });

    return (
        <>
            <ambientLight intensity={0.1} />
            <mesh
                ref={planetRef}
                position={[-10, 1, -7]}
                receiveShadow
                scale={1}
            >
                <sphereGeometry args={[1, 36, 36]} />

                <meshStandardMaterial
                    map={pastelMap}
                    metalness={0.7}
                    roughness={0.7}
                />
            </mesh>
        </>
    );
}
export function Planet5() {
    const pastelMap = useTexture('images/planet5.jpg');
    const planetRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        planetRef.current.rotation.y = elapsedTime / 6;
    });

    return (
        <>
            <ambientLight intensity={0.1} />
            <mesh
                ref={planetRef}
                position={[0, -1.5, 0]}
                receiveShadow
                scale={1}
            >
                <sphereGeometry args={[1, 36, 36]} />

                <meshStandardMaterial
                    map={pastelMap}
                    metalness={0.7}
                    roughness={0.7}
                />
            </mesh>
        </>
    );
}
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
                <Planet1 />
                <Planet2 />
                <Planet3 />
                <Planet4 />
                <Planet5 />
                <pointLight position={[10, 10, 10]} />
            </Canvas>
        </>
    );
};

export default Template2;
