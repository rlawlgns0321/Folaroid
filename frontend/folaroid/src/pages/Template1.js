import * as THREE from 'three';
import { React, Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { useGLTF, Cloud, Center, Text3D } from '@react-three/drei';
//import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';
//div
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//버튼 커스텀
const CustomBtn = styled(Button)`
    height: 300px;
    width: 200px;
    opacity: 0;
`;

export const sizes = {
    width: '100%',
    height: '100%',
};

//구름 배경
export function Scene(props) {
    const map = useGLTF('/models/map.glb');
    //const floor = useTexture('images/grid.jpg');
    return (
        <group>
            <primitive
                object={map.scene}
                scale={7}
                position-x={70}
                position-y={-10}
                position-z={-30}
                // rotation-x={-Math.PI / 1}
            />
            <Cloud
                position={[-50, 10, -10]}
                opacity={0.5}
                scale={1.5}
                speed={0.8}
            />
            <Cloud position={[-30, 20, -20]} opacity={0.5} scale={1.5} />
            <Cloud
                position={[50, 10, -20]}
                opacity={0.5}
                scale={1.5}
                speed={0.5}
            />
            <Cloud position={[0, 30, -40]} opacity={0.5} scale={1.5} />
            <Cloud
                position={[-35, 10, -50]}
                opacity={0.5}
                scale={1.5}
                speed={1}
            />
            <Cloud
                position={[40, 30, -70]}
                opacity={0.3}
                scale={1.5}
                speed={1}
            />
            <Cloud
                position={[80, 5, -70]}
                opacity={0.3}
                scale={1.5}
                speed={1}
            />
            <Cloud position={[-10, 25, -130]} opacity={0.5} scale={1.5} />
            <Cloud position={[30, 20, -120]} opacity={0.5} scale={1.5} />
            <Cloud position={[100, 30, -100]} opacity={0.5} scale={1.5} />
            <Cloud
                position={[90, 25, -130]}
                opacity={0.5}
                scale={1.5}
                speed={0.8}
            />
        </group>
    );
}
export function House1(props) {
    const glb = useLoader(GLTFLoader, '/models/house1.glb');
    return (
        <group {...props} dispose={null}>
            <primitive object={glb.scene} scale={5} />
            <meshPhongMaterial />
        </group>
    );
}
export function House2(props) {
    const glb = useLoader(GLTFLoader, '/models/house2.glb');
    return (
        <group {...props} dispose={null}>
            <primitive object={glb.scene} scale={85} />
        </group>
    );
}
export function House3(props) {
    const glb = useLoader(GLTFLoader, '/models/house3.glb');
    return (
        <group {...props} dispose={null}>
            <primitive object={glb.scene} scale={12} />
        </group>
    );
}
export function House4(props) {
    const glb = useLoader(GLTFLoader, '/models/house4.glb');
    return (
        <group {...props} dispose={null}>
            <primitive object={glb.scene} scale={40} />
        </group>
    );
}

//div section
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
            y: position[newSection][1] + 5,
            z: position[newSection][2] + 15,
        });
        currentSection = newSection;
        flag = 0;
    } else {
    }
}
//버튼 길이
function setButtonDisplay(a, b) {
    let target = document.getElementById(a);
    let targetTop = target.getBoundingClientRect().top;
    let divtarget = document.getElementById(b);
    // console.log(target, targetTop, divtarget);
    // console.log(window.scrollY);
    if (targetTop >= 30 && targetTop <= 150) {
        divtarget.style.display = 'flex';
        //console.log(divtarget.style.display);
    } else {
        divtarget.style.display = 'none';
        //console.log(divtarget.style.display);
    }
}
const Template1 = () => {
    const position = [
        [-6, -4, 15],
        [-7, -6, -27],
        [15, -5, -25],
        [10, 4, -82],
        [55, 10, -80],
        [75, 6, -115],
    ];

    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );
    camera.position.set(-7, 0, 27);
    // 스크롤
    window.addEventListener('scroll', function (event) {
        setSection(position, camera);
        //console.log(position);
        setButtonDisplay('intro', 'divintro');
        setButtonDisplay('pjt1', 'div1');
        setButtonDisplay('pjt2', 'div2');
        setButtonDisplay('pjt3', 'div3');
    });
    // 모달
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState();
    const handleOpen = () => {
        setOpen(true);
        setScroll();
    };
    const handleClose = () => setOpen(false);
    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="xl"
            >
                <DialogTitle id="scroll-dialog-title">
                    프로젝트이름 가져오기
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {[...new Array(1000)]
                            .map(() => `이미지가져오기`)
                            .join('\n')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
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
                    {/* <OrbitControls enableZoom={false} /> */}
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
                    <House1 position={position[0]} />
                    <House2 position={position[1]} />
                    {/* 중간지점 */}
                    <mesh position={position[2]} />
                    <House3 position={position[3]} />
                    <mesh position={position[4]} />
                    <House4 position={position[5]} />
                </Suspense>
            </Canvas>
            {/* div sections */}
            <div className="sections">
                <section className="section">
                    <h2 id="intro">자기소개서</h2>
                    <div id="divintro">
                        <CustomBtn
                            onClick={handleOpen}
                            disableRipple
                            variant="text"
                            size="large"
                        ></CustomBtn>
                    </div>
                </section>
                <section className="section">
                    <h2 id="pjt1">Project1</h2>
                    <div id="div1">
                        <CustomBtn
                            onClick={handleOpen}
                            disableRipple
                            variant="text"
                            size="large"
                        ></CustomBtn>
                    </div>
                </section>
                <section className="section"></section>
                <section className="section">
                    <h2 id="pjt2">Project2</h2>
                    <div id="div2">
                        <CustomBtn
                            onClick={handleOpen}
                            disableRipple
                            variant="text"
                            size="large"
                        ></CustomBtn>
                    </div>
                </section>
                <section className="section"></section>
                <section className="section">
                    <h2 id="pjt3">Project3</h2>
                    <div id="div3">
                        <CustomBtn
                            onClick={handleOpen}
                            disableRipple
                            variant="text"
                            size="large"
                        ></CustomBtn>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Template1;
