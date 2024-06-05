"use client";
import { AirBnBCard } from '@/components/Cards/AirBnB/AirBnBCard';
import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import AutoPlay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const airBnBs = [
    {
        image: "/images/property/crop_prop3.png",
        title: "Modern luxury family home",
        location: "14 Singila,Mwatate,Taita Tevata",
        rating: 3.5,
        reviews: 40,
        price: 7500
    },
    {
        image: "/images/property/crop_prop1.png",
        title: "Modern luxury family home",
        location: "14 Singila,Mwatate,Taita Tevata",
        rating: 3.5,
        reviews: 40,
        price: 7500
    },
    {
        image: "/images/property/crop_prop2.png",
        title: "Modern luxury family home",
        location: "14 Singila,Mwatate,Taita Tevata",
        rating: 4.5,
        reviews: 40,
        price: 7500
    },
    {
        image: "/images/property/crop_prop4.png",
        title: "Modern luxury family home",
        location: "14 Singila,Mwatate,Taita Tevata",
        rating: 1.5,
        reviews: 40,
        price: 7500
    },
    {
        image: "/images/property/crop_prop4.png",
        title: "Modern luxury family home",
        location: "14 Singila,Mwatate,Taita Tevata",
        rating: 5.0,
        reviews: 40,
        price: 7500
    },
];

const SliderItem = () => {
    return (
        <>
            {
                airBnBs.map(((airbnb, i) => (
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