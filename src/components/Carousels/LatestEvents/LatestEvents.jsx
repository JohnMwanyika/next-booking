"use client";
import { EventCard } from '@/components/Cards/Event/EventCard';
import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import { useRef } from 'react';
// import AutoScroll from 'embla-carousel-auto-scroll';
import AutoPlay from 'embla-carousel-autoplay';

const SliderItem = () => {
    return (
        <CarouselSlide>
            <EventCard />
        </CarouselSlide>
    )
}

export default function LatestEvents() {
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
            <SliderItem />
            <SliderItem />
            <SliderItem />
        </Carousel>
    )
}