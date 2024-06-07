"use client";
import { EventCard } from '@/components/Cards/Event/EventCard';
import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import { useRef } from 'react';
import AutoPlay from 'embla-carousel-autoplay';
import { CarouselCardSkeleton } from '@/components/Cards/CardSkeleton';
import useSwr from 'swr';
import { fetcher } from '@/lib/utility';
import { Paper, Text } from '@mantine/core';

const SliderItem = ({ events }) => {
    return (
        <>
            {
                events.map((event, i) => (
                    <CarouselSlide key={i}>
                        <EventCard data={event} />
                    </CarouselSlide>
                ))
            }
        </>
    )
}

export default function LatestEvents() {
    const autoPlay = useRef(AutoPlay());


    const { data, error, isLoading, isValidating } = useSwr('/api/events', fetcher);
    // console.log(data)

    const events = data?.data;
    if (isLoading) return (
        <CarouselCardSkeleton />
    )

    if (error) return <Paper>Failed to load events: {error.message}</Paper>

    return (
        <Carousel
            slidesToScroll={1}
            slideSize={{ base: '90%', sm: '50%', md: '33.333333%', lg: '25%' }}
            slideGap={{ base: "xs", sm: 'md', lg: 'sm' }}
            plugins={[autoPlay.current]}
            loop
            align="start">

            <SliderItem events={events} />

        </Carousel>
    )
}