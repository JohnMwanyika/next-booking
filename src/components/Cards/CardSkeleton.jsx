
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Divider, Flex, Group, Paper, Skeleton, Stack } from "@mantine/core";


export default function CardSkeleton() {
    return (
        <Paper withBorder>
            <Skeleton height={250} mb="sm" />
            <Skeleton height={8} width="20%" radius="sm" />
            <Skeleton height={12} mt={6} width="70%" radius="xl" />
            <Skeleton height={8} mt={6} width="60%" radius="xl" />
            <Skeleton height={8} mt={6} width="50%" radius="xl" />
            <Divider my={8} />
            <Group my={8} justify="space-between" px="sm" align="center">
                <Skeleton height={15} width="40%" radius="xl" />
                <Skeleton height={30} width="40%" radius="xl" />
            </Group>

        </Paper>
    )
}


export const CarouselCardSkeleton = () => {
    return (
        <>
            <Carousel
                slideSize={{ base: '90%', sm: '50%', md: '33.333333%', lg: '25%' }}
                slideGap={{ base: "xs", sm: 'md', lg: 'sm' }}
            >
                <CarouselSlide>
                    <CardSkeleton />
                </CarouselSlide>
                <CarouselSlide>
                    <CardSkeleton />
                </CarouselSlide>
                <CarouselSlide>
                    <CardSkeleton />
                </CarouselSlide>
                <CarouselSlide>
                    <CardSkeleton />
                </CarouselSlide>
                <CarouselSlide>
                    <CardSkeleton />
                </CarouselSlide>
                <CarouselSlide>
                    <CardSkeleton />
                </CarouselSlide>
            </Carousel>
        </>
    )
}