import * as THREE from 'three';
import { React, Suspense, useState} from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Cloud, Center, Text3D } from '@react-three/drei';
//import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { gsap } from 'gsap';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const CustomBtn = styled(Button)`
    height: 200px;
    width: 100px;
    opacity: 0;
`;

export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
//Camera effect

export function Scene(props) {
    const obj = useGLTF('models/map2.glb');
    //const floor = useTexture('images/grid.jpg');
    return (
        <group>
            <primitive
                object={obj.scene}
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
                <Cloud
                position={[-30, 20, -20]}
                opacity={0.5}
                scale={1.5}
                />
                <Cloud
                position={[50, 10, -20]}
                opacity={0.5}
                scale={1.5}
                speed={0.5}
                />
                <Cloud
                position={[0, 30, -40]}
                opacity={0.5}
                scale={1.5}
                />
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
                <Cloud
                position={[-10, 25, -130]}
                opacity={0.5}
                scale={1.5}
                />
                <Cloud
                position={[30, 20, -120]}
                opacity={0.5}
                scale={1.5}
                />
                <Cloud
                position={[100, 30, -100]}
                opacity={0.5}
                scale={1.5}
                />
                <Cloud
                position={[90, 25, -130]}
                opacity={0.5}
                scale={1.5}
                speed={0.8}
                />
        </group>
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

export function Text(){
    //const font = new THREE.FontLoader().parse();
    const textOptions = {
       //font,
       size: 5,
       height: 1
    };
    return (
       <mesh>
          <textGeometry attach='geometry' args={['three.js', textOptions]} />
          <meshStandardMaterial attach='material' color="hotpink" />
        </mesh>
     )
 }

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
    } else {
    }
}
function setButtonDisplay(a, b) {
    let target = document.getElementById(a);
    let targetTop = target.getBoundingClientRect().top;
    let divtarget = document.getElementById(b);
    console.log(target, targetTop, divtarget);
    // console.log(window.scrollY);
    if (targetTop >= 30 && targetTop <= 150) {
        divtarget.style.display = 'flex';
        //console.log(divtarget.style.display);
    } else {
        divtarget.style.display = 'none';
        //console.log(divtarget.style.display);
    }
}
const boxstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Template1 = () => {
    const position = [
        [-7, -5, 12],
        [-7, -5, -25],
        [15, -5, -25],
        [10, 5, -80],
        [55, 10, -80],
        [75, 6.5, -115],
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
        //console.log(position);
        setButtonDisplay('pjt1', 'div1');
        setButtonDisplay('pjt2', 'div2');
        setButtonDisplay('pjt3', 'div3');
        setButtonDisplay('pjt4', 'div4');
    });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                    <House position={position[0]} />
                    {/* <mesh>
                    <Text3D position={position[0]}>
                    {`CSS\nIS\nAWESOME`}
                    </Text3D>
                    </mesh> */}
                    
                    <House position={position[1]} />
                    {/* 중간지점 */}
                    <mesh position={position[2]}></mesh>
                    <House position={position[3]} />
                    <mesh position={position[4]} />
                    <House position={position[5]} />
                </Suspense>
            </Canvas>
            <div className="sections">
                <section className="section">
                    <h2 id="pjt1">Project1</h2>
                    <div id="div1">
                        <CustomBtn
                            onClick={handleOpen}
                            disableRipple
                            variant="text"
                            size="large"
                        ></CustomBtn>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            style={{ width: '100vw', height: '100vh' }}
                        >
                            <Fade in={open}>
                                <Box sx={boxstyle}>
                                    <Typography
                                        id="transition-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        Text in a modal
                                    </Typography>
                                    <Typography
                                        id="transition-modal-description"
                                        sx={{ mt: 2 }}
                                    >
                                        Duis mollis, est non commodo luctus,
                                        nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                </section>
                <section className="section">
                    <h2 id="pjt2">Project2</h2>
                    <div id="div2">
                        <CustomBtn
                            onClick={handleOpen}
                            disableRipple
                            variant="text"
                            size="large"
                        ></CustomBtn>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            style={{ width: '100vw', height: '100vh' }}
                        >
                            <Fade in={open}>
                                <Box sx={boxstyle}>
                                    <Typography
                                        id="transition-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        Text in a modal
                                    </Typography>
                                    <Typography
                                        id="transition-modal-description"
                                        sx={{ mt: 2 }}
                                    >
                                        Duis mollis, est non commodo luctus,
                                        nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
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
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            style={{ width: '100vw', height: '100vh' }}
                        >
                            <Fade in={open}>
                                <Box sx={boxstyle}>
                                    <Typography
                                        id="transition-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        Text in a modal
                                    </Typography>
                                    <Typography
                                        id="transition-modal-description"
                                        sx={{ mt: 2 }}
                                    >
                                        Duis mollis, est non commodo luctus,
                                        nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                </section>
                <section className="section"></section>
                <section className="section">
                    <h2 id="pjt4">Project4</h2>
                    <div id="div4">
                    <CustomBtn
                            onClick={handleOpen}
                            disableRipple
                            variant="text"
                            size="large"
                        ></CustomBtn>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            style={{ width: '100vw', height: '100vh' }}
                        >
                            <Fade in={open}>
                                <Box sx={boxstyle}>
                                    <Typography
                                        id="transition-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        Text in a modal
                                    </Typography>
                                    <Typography
                                        id="transition-modal-description"
                                        sx={{ mt: 2 }}
                                    >
                                        Duis mollis, est non commodo luctus,
                                        nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                </section>
            </div>
        </>
    );
};
export default Template1;
