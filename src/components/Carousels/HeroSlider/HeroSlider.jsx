import { Carousel, CarouselSlide } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import classes from './HeroSlider.module.css'
import { BackgroundImage, Box, Button, Center, Flex, Group, Image, Paper, Rating, Text, Title, rem } from '@mantine/core';
import { IconBuildingEstate, IconMapPin, IconStar } from '@tabler/icons-react';

const HeroItem = () => (
    <Paper p="md">
        <BackgroundImage
            src='/images/property/crop_prop1.png'
        />
        <Center>

            <Flex justify="center" align="flex-start" direction={{ base: "column-reverse", md: "row" }}>
                <Box w={{ md: "100%", lg: "50%" }}>
                    <Group align='center'>
                        <Paper p="3" radius="sm" shadow='xs' withBorder visibleFrom='lg' >
                            <IconBuildingEstate
                                style={{ width: rem(50), height: rem(50) }}
                                color="var(--mantine-color-red-filled)"
                                stroke={1.5}
                            />
                        </Paper>
                        <Title order={3}>Luxury Family Home</Title>
                    </Group>
                    <Box py="lg">
                        <Group gap={1}>
                            <IconMapPin
                                style={{ width: rem(20), height: rem(20) }}
                                color="var(--mantine-color-gray-5)"
                            />
                            <Text>1421 San Pedro, Los Angeles</Text>
                        </Group>
                        <Group>
                            <Rating value={3.5} fractions={2} readOnly />
                            <Text c="gray.5">(10 reviews)</Text>
                        </Group>
                    </Box>
                    <Text my="lg" trancate="end" visibleFrom='lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
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
                            src="/images/property/crop_prop1.png"
                            fallbackSrc="https://placehold.co/450x450?text=Placeholder"
                        />
                    </Group>
                </Box>
            </Flex>
        </Center>
    </Paper >
)

export function HeroSlider() {

    return (
        <Carousel controlsOffset="lg" withIndicators loop classNames={classes} >
            <CarouselSlide>
                <HeroItem />
            </CarouselSlide>
            <CarouselSlide>
                <HeroItem />
            </CarouselSlide>
            <CarouselSlide>
                <HeroItem />
            </CarouselSlide>
        </Carousel>
    )
}