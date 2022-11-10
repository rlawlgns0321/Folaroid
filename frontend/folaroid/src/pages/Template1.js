import * as THREE from 'three';
import { React, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    PerspectiveCamera,
    //useTexture,
    useGLTF,
    OrbitControls,
    Html,
    Text3D,
} from '@react-three/drei';
//import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { gsap } from 'gsap';
import { Container } from '@mui/system';
export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
//Camera effect

export function Scene(props) {
    const obj = useGLTF('models/map2.glb');
    //const floor = useTexture('images/grid.jpg');
    return (
        <primitive
            object={obj.scene}
            scale={7}
            position-x={70}
            position-y={-10}
            position-z={-30}
            // rotation-x={-Math.PI / 1}
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
            ></mesh>
        </group>
    );
}
useGLTF.preload('/house.gltf');

let currentSection = 0;
let flag = 0;
function setSection(position, camera) {
    const newSection = Math.round(window.scrollY / window.innerHeight);
    if (currentSection !== newSection) {
        flag = 1;
        /*화면이동 */
        gsap.to(camera.position, {
            rotation: 0,
            duration: 1,
            x: position[newSection][0],
            y: position[newSection][1] + 5,
            z: position[newSection][2] + 15,
        });
        currentSection = newSection;
        flag = 0;
    }
    console.log(newSection, currentSection);
}
function setModal() {
    /*alert('프로젝트를 띄울거임');*/
}
const Template1 = () => {
    const position = [
        [-7, -5, 12],
        [-7, -5, -25],
        [10, 5, -80],
        [75, 6.5, -115],
        //[-5, 0, -40],
    ];

    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );
    camera.position.set(-7, 0, 27);
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
                    <OrbitControls enableZoom={false} />
                    <directionalLight
                        castShadow
                        position={[80, 80, 30]}
                        intensity={0.1}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-100}
                        shadow-camera-right={100}
                        shadow-camera-top={100}
                        shadow-camera-bottom={-100}
                    />
                    <ambientLight intensity={1} />
                    <House position={position[0]} />
                    <House position={position[1]} />
                    <House position={position[2]} />
                    <House position={position[3]} />
                    {/* <House position={position[4]} /> */}
                </Suspense>
            </Canvas>
            {/* <div className="sections">
                <section className="section">
                    <h2>Project1</h2>
                    <div postion={}>click</div>
                </section>
                <section className="section">
                    <h2>Project2</h2>
                    <div>click</div>
                </section>
                <section className="section">
                    <h2>Project3</h2>
                    <div>click</div>
                </section>
                <section className="section">
                    <h2>Project4</h2>
                    <div>click</div>
                </section>
                <section className="section">
                    <h2>05</h2>
                </section>
            </div> */}
        </>
    );
};
export default Template1;
