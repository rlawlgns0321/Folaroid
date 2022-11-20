import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import './style.css';
import ProjectDialog from '../../dialog/ProjectDialog';
import BasicModal from '../introTemplate1';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Gallery = ({ items, pfName }) => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('');
    const [openPjt, setOpenPjt] = useState(false);
    const [pjt, setPjt] = useState({});

    const handleClick = (project) => {
        setPjt(project);
        if (!pjt.intro) setOpenPjt(true);
    };

    const handleClose = () => {
        setOpenPjt(false);
    };

    const handleOpen = (project) => {
        setPjt(project);
        setOpen(true);
        setScroll();
    };

    const onClose = () => setOpen(false);
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
        <div className="wrap">
            <h1>{pfName}</h1>

            <ul className="auto">
                <li className="btnStart">
                    <i className="fas fa-play"></i>
                </li>
                <li className="btnStop">
                    <i className="fas fa-pause"></i>
                </li>
            </ul>

            <Swiper
                direction="horizontal"
                loop
                pagination={{ el: '.swiper-pagination', type: 'fraction' }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={0}
                slidesPerView="auto"
                grabCursor
                centeredSlides
                speed={1000}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: -100,
                    depth: 400,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{ delay: 1000, disableOnInteraction: true }}
            >
                {items.map((project, key) => (
                    <SwiperSlide
                        key={key}
                        onClick={
                            project.intro
                                ? () => {
                                      handleOpen(project);
                                  }
                                : () => handleClick(project)
                        }
                    >
                        <div className="inner">
                            <div className="con">
                                <img
                                    src={project.pjtOneImageLocation}
                                    alt="1"
                                />
                                <h2>{project.pjtTitle}</h2>
                                <p>{project.pjtSubtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <div className="swiper-pagination"></div>
            {pjt.intro ? (
                <BasicModal
                    project={pjt}
                    handleClose={onClose}
                    scroll={scroll}
                    open={open}
                />
            ) : (
                <ProjectDialog
                    open={openPjt}
                    handleClose={handleClose}
                    project={pjt}
                />
            )}
        </div>
    );
};

Gallery.defaultProps = {
    pfName: 'DEVELOPER',
    items: [
        {
            pjtTitle: 'Dicta! elit.',
            pjtSubtitle:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, accusantium corrupti.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Dicta! elit.',
            pjtSubtitle:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, accusantium corrupti.',
            pjtOneImageLocation: '/images/1.jpg',
        },
        {
            pjtTitle: 'Dicta! elit.',
            pjtSubtitle:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, accusantium corrupti.',
            pjtOneImageLocation: '/images/1.jpg',
        },
    ],
};

export default Gallery;
