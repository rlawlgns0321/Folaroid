import React, { useRef, Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import {
    OrbitControls,
    PerspectiveCamera,
    Stars,
    useTexture,
} from '@react-three/drei';
import planetData from '../components/common/PlanetData';
import gsap from 'gsap';

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
    zoomToView,
}) {
    const planetRef = useRef();
    const texture = useTexture(textureMap);
    const [zoom, setZoom] = useState(false);
    const camera = useThree((state) => state.camera);
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
            <mesh
                ref={planetRef}
                receiveShadow
                scale={1}
                onClick={(e) => {
                    let pos = e.object.position;
                    console.log(planetRef.current.id / 2 - 9);
                    setZoom(!zoom);
                    zoom
                        ? gsap.to(camera.position, {
                              rotation: 0,
                              duration: 1,
                              x: pos.x,
                              y: pos.y + 5,
                              z: pos.z + 10,
                          })
                        : gsap.to(camera.position, {
                              rotation: 0,
                              duration: 1,
                              x: 0,
                              y: 20,
                              z: 25,
                          });
                }}
            >
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
    const [position1, setPosition1] = useState([0, 20, 25]);
    function zoomToView(pos) {
        console.log(pos);
        setPosition1(pos);

        console.log(position1);
    }
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
                    {/* 반복문을 위한 map함수 각 행성 호출 */}
                    {planetData.map((planet) => (
                        <Planet
                            zoomToView={zoomToView}
                            planet={planet}
                            key={planet.id}
                        />
                    ))}
                    <directionalLight
                        position={[150, 150, 150]}
                        intensity={0.55}
                    />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls enableZoom={false} />
                </Suspense>
            </Canvas>
        </>
    );
};

export default Template2;
