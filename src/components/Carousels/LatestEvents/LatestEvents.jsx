"use client";
import { EventCard } from '@/components/Cards/Event/EventCard';
import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import { useRef } from 'react';
// import AutoScroll from 'embla-carousel-auto-scroll';
import AutoPlay from 'embla-carousel-autoplay';

const events = [
    {
        image: "/images/events/event1.png",
        title: "Sounds from The East",
        venue: "14 Singila,Mwatate,Taita Tevata",
        startTime: "02:30 pm",
        endTime: "07:00 pm",
        price: 4500.00
    },
    {
        image: "/images/events/event2.png",
        title: "Sounds from The East",
        venue: "14 Singila,Mwatate,Taita Tevata",
        startTime: "02:30 pm",
        endTime: "07:00 pm",
        price: 4500.00
    },
    {
        image: "/images/events/event3.png",
        title: "Sounds from The East",
        venue: "14 Singila,Mwatate,Taita Tevata",
        startTime: "02:30 pm",
        endTime: "07:00 pm",
        price: 4500.00
    },
    {
        image: "/images/events/event4.png",
        title: "Sounds from The East",
        venue: "14 Singila,Mwatate,Taita Tevata",
        startTime: "02:30 pm",
        endTime: "07:00 pm",
        price: 4500.00
    },
    {
        image: "/images/events/event5.png",
        title: "Sounds from The East",
        venue: "14 Singila,Mwatate,Taita Tevata",
        startTime: "02:30 pm",
        endTime: "07:00 pm",
        price: 4500.00
    },
];

const SliderItem = () => {
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
    return (
        <Carousel
            slidesToScroll={1}
            slideSize={{ base: '90%', sm: '50%', md: '33.333333%', lg: '25%' }}
            slideGap={{ base: "xs", sm: 'md', lg: 'sm' }}
            plugins={[autoPlay.current]}
            loop
            align="start">
            <SliderItem />
        </Carousel>
    )
}