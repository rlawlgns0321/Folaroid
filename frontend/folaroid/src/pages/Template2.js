import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
    OrbitControls,
    Environment,
    useGLTF,
    Float,
    PivotControls,
    QuadraticBezierLine,
    Backdrop,
    ContactShadows,
    Stars,
    useCursor,
    Box,
} from '@react-three/drei';
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import {
    Button,
    ButtonGroup,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Tab,
    Tabs,
} from '@mui/material';
import { TabPanel } from '@mui/joy';

export function Astronaut(props) {
    const glb = useLoader(GLTFLoader, 'models/astronaut.glb');
    const [hovered, set] = useState();
    useCursor(hovered /*'pointer', 'auto'*/);
    return (
        <group {...props} dispose={null}>
            <primitive
                object={glb.scene}
                scale={3}
                onPointerOver={() => set(true)}
                onPointerOut={() => set(false)}
            />
            <meshPhongMaterial />
        </group>
    );
}

const Template5 = () => {
    const spaceman = useRef();
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
        <div style={{ height: '100vh', position: 'relative' }}>
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
            {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
                <Button>Five</Button>
            </ButtonGroup> */}

            <Canvas
                style={{
                    background: 'black',
                    // position: 'fixed',
                    // top: '0',
                    // left: '0',
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
                        floatIntensity={2}
                        rotationIntensity={0.5}
                        //rotation={[0, 0.6, 0]}
                    >
                        <Astronaut
                            scale={0.2}
                            position={[0, 1, 0]}
                            onClick={handleOpen}
                        >
                            <object3D position={[0, 0, 0]} ref={spaceman} />
                        </Astronaut>
                    </Float>

                    {/* <OrbitControls /> */}
                </Suspense>
            </Canvas>
            <Pagination
                count={5}
                hidePrevButton
                hideNextButton
                onClick={handleOpen}
                style={{ position: 'absolute' }}
            />
        </div>
    );
};

export default Template5;
