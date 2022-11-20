import { Dialog, Slide } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const InfoWrap = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
`;

const ImgWrap = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const InfoRight = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 90%;
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
`;
const Description = styled.div`
    width: 80%;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
    font-weight: bold;
`;

const DescriptionText = styled.div`
    width: 80%;
`;

const ImgaesWrap = styled.div`
    margin: auto;
    width: 100%;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectDialog = ({ open, handleClose, project }) => {
    return (
        <Dialog
            TransitionComponent={Transition}
            fullWidth
            maxWidth={'md'}
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <div>
                {/* <InfoWrap>
                    <ImgWrap>
                        <Img src={project.pjtOneImageLocation} alt="1" />
                    </ImgWrap>
                    <InfoRight>
                        <Title>{project.pjtTitle}</Title>
                        <Description>Description</Description>
                        <DescriptionText>{project.pjtSubtitle}</DescriptionText>
                    </InfoRight>
                </InfoWrap> */}
                <ImgaesWrap>
                    {project.pjtImages &&
                        project.pjtImages.map((image, key) => (
                            <img
                                key={key}
                                src={image.pjtImageLocation}
                                alt={key}
                                style={{ width: '100%' }}
                            />
                        ))}
                </ImgaesWrap>
            </div>
        </Dialog>
    );
};

export default ProjectDialog;
