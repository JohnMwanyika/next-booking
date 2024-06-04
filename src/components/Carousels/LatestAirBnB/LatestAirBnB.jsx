"use client";
import { AirBnBCard } from '@/components/Cards/AirBnB/AirBnBCard';
import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import AutoPlay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const SliderItem = () => {
    return (
        <CarouselSlide>
            <AirBnBCard />
        </CarouselSlide>
    )
}

export default function LatestAirBnB() {
    const autoPlay = useRef(AutoPlay());
    return (
        <Carousel
            slidesToScroll={1}
            slideSize={{ base: '90%', sm: '50%', md: '33.333333%', lg: '25%' }}
            slideGap={{ base: "xs", sm: 'md', lg: 'sm' }}
            plugins={[autoPlay.current]}
            loop
            align="start">
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
        </Carousel>
    )
}