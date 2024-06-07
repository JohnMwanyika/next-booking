"use client";
import { AirBnBCard } from '@/components/Cards/AirBnB/AirBnBCard';
import { CarouselCardSkeleton } from '@/components/Cards/CardSkeleton';
import { fetcher } from '@/lib/utility';
import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import AutoPlay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import useSWR from 'swr';


const SliderItem = ({ data }) => {
    return (
        <>
            {
                data.map(((airbnb, i) => (
                    <CarouselSlide key={i}>
                        <AirBnBCard data={airbnb} />
                    </CarouselSlide>
                )))
            }
        </>
    )
}


export default function LatestAirBnB() {
    const autoPlay = useRef(AutoPlay());
    const { data, isLoading } = useSWR('/api/airbnb', fetcher);

    const airBnBs = data?.data;

    if (isLoading) return (
        <CarouselCardSkeleton />
    )


    return (
        <Carousel
            slidesToScroll={1}
            slideSize={{ base: '90%', sm: '50%', md: '33.333333%', lg: '25%' }}
            slideGap={{ base: "xs", sm: 'md', lg: 'sm' }}
            plugins={[autoPlay.current]}
            loop
            align="start">
            <SliderItem data={airBnBs} />
        </Carousel>
    )
}