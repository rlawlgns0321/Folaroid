import React, { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import planetData from '../components/common/PlanetData';

export function Planet({
    planet: {
        color,
        xRadius,
        zRadius,
        size,
        speed,
        offset,
        rotationSpeed,
        textureMap,
    },
}) {
    const planetRef = React.useRef();
    const texture = useTexture(textureMap);
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset;
        const x = xRadius * Math.sin(t);
        const z = zRadius * Math.cos(t);
        planetRef.current.position.x = x;
        planetRef.current.position.z = z;
        planetRef.current.rotation.y += rotationSpeed;
    });

    return (
        <>
            <mesh ref={planetRef} receiveShadow scale={1}>
                <sphereGeometry args={[size, 32, 32]} />

                <meshStandardMaterial
                    map={texture}
                    metalness={0.3}
                    roughness={0.7}
                />
            </mesh>
            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
        </>
    );
}

export function PlanetClick() {
    const [zoom, setZoom] = useState(false);
    const [focus, setFocus] = useState(true);
    const mouse = new THREE.Vector3();
    useFrame((state) => {
        const step = 0.05;
        zoom ? mouse.set(focus.x, focus.y, focus.z + 0.2) : mouse.set(0, 0, 5);
        state.camera.position.lerp(mouse, step);
        state.camera.lookAt(0, 0, 0);
        state.camera.updateProjectionMatrix();
    });
    // const zoomToView = (focusRef) => {
    //     setZoom(!zoom);
    //     setFocus(focusRef.current.position);
    //   };
    //   return (
    // //     <instancedMesh>
    // //       {momentsData.map((moment, i) => {
    // //         // Set position here so it isn't reset on state change
    // //         // for individual moment.
    // //         return <Moment key={i} data={moment} zoomToView={zoomToView} />;
    // //       })}
    // //     </instancedMesh>
    // //   );
}
export function Ecliptic({ xRadius = 1, zRadius = 1 }) {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = xRadius * Math.cos(angle);
        const z = zRadius * Math.sin(angle);
        points.push(new THREE.Vector3(x, 0, z));
    }

    points.push(points[0]);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial
                attach="material"
                color="#393e46"
                linewidth={10}
            />
        </line>
    );
}

const Template2 = () => {
    return (
        <>
            <Canvas
                camera={{ position: [0, 20, 25], fov: 45 }}
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    background: 'black',
                }}
            >
                <Suspense fallback={null}>
                    <Stars
                        radius={300}
                        depth={60}
                        count={20000}
                        factor={5}
                        saturation={10}
                        fade={true}
                    />
                    <ambientLight intensity={0.5} />
                    {planetData.map((planet) => (
                        <Planet planet={planet} key={planet.id} />
                    ))}
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls enableZoom={false} />
                </Suspense>
            </Canvas>
        </>
    );
};

export default Template2;
