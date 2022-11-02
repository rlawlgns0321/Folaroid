import * as THREE from 'three';
import { React, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

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
            />
        </group>
    );
}

useGLTF.preload('/house.gltf');

const Template1 = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    {/* 부드럽게 마우스 이동 */}
                    <OrbitControls
                        enableDamping={true}
                        maxDistance={40}
                        minDistance={2}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 4}
                    />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <Scene />
                    <House position={[-5, 0, 20]} />
                    <House position={[7, 0, 10]} />
                    <House position={[-10, 0, 0]} />
                    <House position={[10, 0, -10]} />
                    <House position={[-5, 0, -20]} />
                    <Player />
                </Suspense>
            </Canvas>
        </>
    );
};
export default Template1;
