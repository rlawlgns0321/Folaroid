import * as THREE from 'three';
import { React, Suspense, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { Camera, TextureLoader } from 'three';
import { Tween } from 'react-gsap';
import { Scroll, ScrollControls } from '@react-three/drei';

export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
//Camera effect

export function Player() {
    return (
        <mesh position={[2, -0.5, 0]} receiveShadow scale={0.5}>
            <sphereGeometry />
            <meshLambertMaterial color={'pink'} />
        </mesh>
    );
}
export function Scene(props) {
    const floor = useLoader(TextureLoader, 'images/grid.jpg');
    return (
        <mesh
            receiveShadow
            position-y={-1}
            rotation-x={-Math.PI / 2}
            scale={100}
        >
            <planeGeometry />
            <meshBasicMaterial map={floor} />
        </mesh>
    );
}

export function House(props) {
    const { nodes, materials } = useGLTF('/models/house.gltf');
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials.Material}
            ></mesh>
        </group>
    );
}
useGLTF.preload('/house.gltf');

const Template1 = () => {
    const [position, setPosition] = useState([
        [-5, 0, -20],
        [7, 0, 10],
        [-10, 0, 0],
        [10, 0, -10],
        [-5, 0, 20],
    ]);

    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );
    camera.position.set(-5, 2, 25);

    //스크롤

    return (
        <>
            <Canvas
                camera={camera}
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    background: 'rgb(243, 245, 215)',
                }}
            >
                <Suspense fallback={null}>
                    {/* 부드럽게 마우스 이동 */}

                    <OrbitControls
                        enableDamping={true}
                        maxDistance={40}
                        minDistance={2}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 4}
                    />
                    <PerspectiveCamera
                        far={1000}
                        near={0.1}
                        fov={75}
                        aspect={sizes.width / sizes.height}
                        position={[0, 0, 2]}
                    />
                    <House position={position[0]} />
                    <House position={position[1]} />
                    <House position={position[2]} />
                    <House position={position[3]} />
                    <House position={position[4]} />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                </Suspense>
            </Canvas>
            <div className="sections">
                <section className="section">
                    <h2>01</h2>
                </section>
                <section className="section">
                    <h2>02</h2>
                </section>
                <section className="section">
                    <h2>03</h2>
                </section>
                <section className="section">
                    <h2>04</h2>
                </section>
                <section className="section">
                    <h2>05</h2>
                </section>
            </div>
        </>
    );
};
export default Template1;
