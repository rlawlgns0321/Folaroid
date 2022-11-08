import * as THREE from 'three';
import { React, Suspense, useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
    PerspectiveCamera,
    useTexture,
    useGLTF,
    useAnimations,
} from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { gsap } from 'gsap';
import { AmbientLight, DirectionalLight } from 'three';
export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
//Camera effect

export function Scene(props) {
    const obj = useLoader(OBJLoader, 'models/NatureBase.obj');
    const floor = useTexture('images/grid.jpg');
    return (
        <primitive
            object={obj}
            scale={5}
            position-y={1}
            position-z={-180}
            rotation-x={-Math.PI}
        />
        // <mesh
        //     receiveShadow
        //     position-y={-1}
        //     rotation-x={-Math.PI / 2}
        //     scale={100}
        // >
        //     <planeGeometry />
        //     <meshBasicMaterial castShadow map={floor} />
        // </mesh>
    );
}
export function House(props) {
    const { nodes, materials } = useGLTF('/models/house.gltf');
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                onClick={() => console.log('click')}
            ></mesh>
        </group>
    );
}
useGLTF.preload('/house.gltf');

export function Tree1(props) {
    const { nodes, materials } = useGLTF('/models/tree1.gltf');
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.tree009.geometry}
                material={materials.Lowpoly_naural}
                position={[-0.01, 0, 0]}
                scale={1.61}
            />
        </group>
    );
}

useGLTF.preload('/tree1.gltf');

let currentSection = 0;
let flag = 0;
function setSection(position, camera) {
    const newSection = Math.round(window.scrollY / window.innerHeight);

    if (currentSection !== newSection) {
        flag = 1;
        /*화면이동 */
        gsap.to(camera.position, {
            duration: 1,
            x: position[newSection][0],
            z: position[newSection][2],
        });
        currentSection = newSection;
        flag = 0;
    }
}
function setModal() {
    /*alert('프로젝트를 띄울거임');*/
}
const Template1 = () => {
    const position = [
        [-5, 0, 40],
        [-5, 0, 20],
        [-5, 0, 0],
        [-5, 0, -20],
        [-5, 0, -40],
    ];

    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );
    camera.position.set(-5, 2, 25);

    //스크롤
    window.addEventListener('scroll', function (event) {
        setSection(position, camera);
        setModal();
    });
    // //클릭
    // window.addEventListener('click', function (event) {
    //     if (flag === 0) {
    //         this.alert(currentSection);
    //     }
    //     //리스트인덱스에 맞는 모달을 만들거임
    // });

    return (
        <>
            <Canvas
                camera={camera}
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    background: 'lightblue',
                }}
            >
                <Suspense fallback={null}>
                    {/* 부드럽게 마우스 이동 */}
                    <Scene />
                    {/* <OrbitControls
                        enableDamping={true}
                        maxDistance={40}
                        minDistance={2}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 4}
                    /> */}
                    <PerspectiveCamera
                        far={1000}
                        near={0.1}
                        fov={75}
                        aspect={sizes.width / sizes.height}
                        position={[0, 0, 2]}
                    />
                    <directionalLight
                        castShadow
                        position={[0, 10, 0]}
                        intensity={4}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-100}
                        shadow-camera-right={100}
                        shadow-camera-top={100}
                        shadow-camera-bottom={-100}
                    />
                    <ambientLight intensity={0.3} />
                    <House position={position[0]} />
                    <House position={position[1]} />
                    <House position={position[2]} />
                    <House position={position[3]} />
                    <House position={position[4]} />
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
