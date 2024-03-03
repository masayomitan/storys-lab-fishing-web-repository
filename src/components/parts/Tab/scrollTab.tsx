'use client'

import React from 'react';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css";

const ScrollTab = () => {
    const slideContents = ["ルアー", "リール", "ハリス", "タックル", "まき餌", "その他"];

    return (
        <Box>
            <Swiper
                spaceBetween={5}
                slidesPerView={4}
            >
            {slideContents.map((content, index) => (
                <SwiperSlide key={index}>
                    {content}
                </SwiperSlide>
            ))}
            </Swiper>
        </Box>
    );
}

export default ScrollTab;
