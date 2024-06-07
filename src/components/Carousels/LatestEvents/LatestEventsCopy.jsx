"use client";
import { EventCard } from '@/components/Cards/Event/EventCard';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useEffect, useRef, useState, Suspense } from 'react';
import AutoPlay from 'embla-carousel-autoplay';
import CardSkeleton, { CarouselCardSkeleton } from '@/components/Cards/CardSkeleton';

const SliderItem = ({ events }) => {
    return (
        <>
            {events.map((event, i) => (
                <CarouselSlide key={i}>
                    <EventCard data={event} />
                </CarouselSlide>
            ))}
        </>
    );
};

export default function LatestEvents() {
    const autoPlay = useRef(AutoPlay());
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = [
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
                resolve(data);
            }, 2000);
        });
    }

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchData();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    return (
        <Carousel
            slidesToScroll={1}
            slideSize={{ base: '90%', sm: '50%', md: '33.333333%', lg: '25%' }}
            slideGap={{ base: "xs", sm: 'md', lg: 'sm' }}
            plugins={[autoPlay.current]}
            loop
            align="start"
        >
            {loading ? (
                <CarouselCardSkeleton />
            ) : (
                <Suspense fallback={<CardSkeleton />}>
                    <SliderItem events={events} />
                </Suspense>
            )}
        </Carousel>
    );
}
