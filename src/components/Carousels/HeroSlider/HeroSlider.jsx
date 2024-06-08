"use client";
import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import classes from './HeroSlider.module.css'
import { Box, Button, Center, Flex, Group, Image, Paper, Rating, Text, Title, rem } from '@mantine/core';
import { IconBuildingEstate, IconMapPin, IconStar } from '@tabler/icons-react';
import useSWR from 'swr';
import { fetcher } from '@/lib/utility';
import { CarouselCardSkeleton } from '@/components/Cards/CardSkeleton';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import HeroSkeleton from './HeroSkeleton';

const HeroItem = ({ data }) => (
    <CarouselSlide>
        <Paper p="md">
            <Flex justify="center" align="flex-start" direction={{ base: "column-reverse", md: "row" }}>

                <Box w={{ md: "100%", lg: "50%" }}>
                    <Group align='center'>
                        <Paper p="3" radius="sm" shadow='xs' withBorder visibleFrom='lg' >
                            {
                                data?.icon || <IconBuildingEstate
                                    style={{ width: rem(55), height: rem(55) }}
                                    color="var(--mantine-color-red-filled)"
                                    stroke={2}
                                />
                            }

                        </Paper>
                        <Title order={3}>{data?.title} Luxury Family Home</Title>
                    </Group>
                    <Box py="lg">
                        <Group gap={1}>
                            <IconMapPin
                                style={{ width: rem(20), height: rem(20) }}
                                color="var(--mantine-color-gray-5)"
                            />
                            <Text>{data?.location || "1421 San Pedro, Los Angeles"}</Text>
                        </Group>
                        <Group>
                            <Rating value={data?.rating} fractions={2} readOnly />
                            <Text c="gray.5">({data?.reviews || "0 reviews"})</Text>
                        </Group>
                    </Box>
                    <Text my="lg" trancate="end" visibleFrom='lg'>
                        {data?.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    </Text>
                    <Group>
                        <Button variant='filled' color='red.5'>Book</Button>
                        <Button variant='outline' color='red.5'>Add to wishlist</Button>
                    </Group>
                </Box>

                <Box >
                    <Group justify='center' my="xs">
                        <Image
                            radius="sm"
                            h={450}
                            w={450}
                            // fit="contain"
                            src={data?.image || "/images/property/crop_prop1.png"}
                            // src="/images/property/crop_prop1.png"
                            fallbackSrc="https://placehold.co/450x450?text=Placeholder"
                        />
                    </Group>
                </Box>
            </Flex>
        </Paper >
    </CarouselSlide>
)

export function HeroSlider() {
    const autoPlay = useRef(Autoplay());

    const { data, error, isLoading } = useSWR('/api/airbnb', fetcher);
    if (isLoading) return <HeroSkeleton />
    const cardData = data.data;
    return (
        <Carousel controlsOffset="lg" withIndicators loop classNames={classes} plugins={[autoPlay.current]} >
            {
                cardData.map((data, i) => <HeroItem data={data} key={i} />)
            }
        </Carousel>
    )
}