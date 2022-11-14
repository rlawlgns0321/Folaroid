import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { portfolioProject } from '../../modules/portfolioProject';
import { Dialog, DialogTitle, ImageList, ImageListItem } from '@mui/material';

const Wrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 1.4rem;
    color: #248bea;
    font-weight: bold;
    letter-spacing: 3px;
`;

const TitleInput = styled.input`
    border: 0;
    font-size: 1.6rem;
    color: white;
    font-weight: bold;
    letter-spacing: 3px;
    background-color: inherit;
    outline: none;
    border-left: 4px solid #248bea;
    padding-left: 15px;
`;

const TitleWrap = styled.div`
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 20px;
`;

const DescriptionWrap = styled.div`
    height: 50%;
    margin-top: 20px;
`;

const DescriptionArea = styled.textarea`
    height: 250px;
    width: 100%;
    background-color: inherit;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    border: none;
`;

const ImageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 35%;
    width: 100%;
`;

const PjtImage = styled.img`
    width: 100%;
    height: 90%;
    cursor: pointer;
    border-radius: 10px;
    object-fit: contain;
`;

const HomePanel = observer(({ store }) => {
    const project = useSelector((state) => state.portfolioProject.project);
    const repo = useSelector((state) => state.github.repo);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(portfolioProject.actions.changeInput({ value, name }));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const selectImage = (item) => {
        dispatch(portfolioProject.actions.changeProjectImage(item));
        handleClose();
    }
    return (
        <Wrap>
            <ImageWrap>
                <Title>대표사진</Title>
                <PjtImage
                    src={project.pjtOneImageLocation}
                    onClick={handleClickOpen}
                />
            </ImageWrap>
            <TitleWrap>
                <Title>프로젝트명</Title>
                <TitleInput
                    type="text"
                    name="pjtTitle"
                    value={project.pjtTitle}
                    onChange={onChange}
                />
            </TitleWrap>
            <DescriptionWrap>
                <Title>프로젝트 설명</Title>
                <DescriptionArea
                    name="pjtSubtitle"
                    value={project.pjtSubtitle}
                    onChange={onChange}
                />
            </DescriptionWrap>
            <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
                <DialogTitle>대표 이미지 선택</DialogTitle>
                <ImageList
                    sx={{ width: '100%', height: '100%' }}
                    variant="masonry"
                    cols={3}
                    gap={8}
                >
                    {repo.imagesUrl.map((item, key) => (
                        <ImageListItem key={key}>
                            <img
                                style={{cursor:'pointer'}}
                                src={`${item}?w=161&fit=crop&auto=format`}
                                srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"
                                onClick={() => selectImage(item)}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Dialog>
        </Wrap>
    );
});

export default HomePanel;
