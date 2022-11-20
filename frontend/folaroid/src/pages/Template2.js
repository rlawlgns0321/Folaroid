import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
    Float,
    Stars,
    useCursor,
    ScrollControls,
    Scroll,
} from '@react-three/drei';
import styled from 'styled-components';
import {
    Button,
    ButtonGroup,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

export function Astronaut(props) {
    const glb = useLoader(GLTFLoader, 'models/rose.glb');
    const [hovered, set] = useState();
    useCursor(hovered /*'pointer', 'auto'*/);
    return (
        <group {...props} dispose={null}>
            <primitive
                object={glb.scene}
                scale={200}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
            />
            <meshPhongMaterial />
        </group>
    );
}

const Template2 = () => {
    const spaceman = useRef();
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState();
    const [hovered, set] = useState();
    useCursor(hovered /*'pointer', 'auto'*/);
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
        <div style={{ height: '100vh', position: 'relative' }}>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="xl"
                PaperProps={{
                    style: { backgroundColor: 'rgba(0,0,0,0.26)' },
                }}
            >
                <DialogTitle id="scroll-dialog-title" color="white">
                    프로젝트이름 가져오기
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        color="white"
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
                style={{
                    background: 'linear-gradient(black, #3b2574)',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                }}
            >
                <Suspense fallback={null}>
                    <Stars
                        radius={300}
                        depth={60}
                        count={5000}
                        factor={30}
                        saturation={5}
                        fade={true}
                    />
                    <ambientLight intensity={0.2} />
                    <directionalLight intensity={1} />
                    <spotLight position={[5, 10, 5]} intensity={1} castShadow />
                    <Float
                        scale={0.75}
                        //position={[0, 0.65, 0]}
                        floatIntensity={3}
                        //rotationIntensity={5}
                        //rotation={[0, 0.6, 0]}
                    >
                        <Astronaut
                            scale={0.2}
                            position={[-1, 1.5, 0]}
                            onClick={handleOpen}
                        >
                            <object3D position={[0, 0, 0]} ref={spaceman} />
                        </Astronaut>
                    </Float>
                    <ScrollControls pages={5} infinite={false}>
                        <Scroll html style={{ width: '100%' }}>
                            <h1
                                onPointerOver={() => set(true)}
                                onPointerOut={() => set(false)}
                                style={{
                                    position: 'absolute',
                                    top: `10vh`,
                                    left: '15vw',
                                    fontSize: '5em',
                                    color: 'white',
                                }}
                                onClick={handleOpen}
                            >
                                Hello,
                                <br />
                                Click me
                            </h1>

                            <h2
                                style={{
                                    position: 'absolute',
                                    top: '100vh',
                                    right: '20vw',
                                    color: 'white',
                                    fontSize: '5em',
                                }}
                                onClick={handleOpen}
                            >
                                Work
                            </h2>
                            <Button
                                style={{
                                    position: 'absolute',
                                    top: `200vh`,
                                    left: '10vw',
                                    fontSize: '5em',
                                    color: 'white',
                                    fontFamily: 'S-CoreDream-3Light',
                                }}
                                onClick={handleOpen}
                            >
                                Project1
                            </Button>
                            <Button
                                style={{
                                    position: 'absolute',
                                    top: `300vh`,
                                    left: '10vw',
                                    fontSize: '5em',
                                    color: 'white',
                                    fontFamily: 'S-CoreDream-3Light',
                                }}
                                onClick={handleOpen}
                            >
                                Project2
                            </Button>
                            <Button
                                style={{
                                    position: 'absolute',
                                    top: `400vh`,
                                    left: '10vw',
                                    fontSize: '5em',
                                    color: 'white',
                                    fontFamily: 'S-CoreDream-3Light',
                                }}
                                onClick={handleOpen}
                            >
                                Project3
                            </Button>
                        </Scroll>
                    </ScrollControls>
                    {/* <OrbitControls /> */}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Template2;
