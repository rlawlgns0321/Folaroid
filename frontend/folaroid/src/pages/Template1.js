import { React, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

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
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <House />
                </Suspense>
            </Canvas>
        </>
    );
};
export default Template1;
