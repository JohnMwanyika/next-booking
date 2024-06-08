
import { Carousel, CarouselSlide } from "@mantine/carousel";
import '@mantine/carousel/styles.css';
import { Box, Divider, Flex, Group, Paper, Skeleton, Stack, Text } from "@mantine/core";


export default function HeroSkeleton() {
    return (
        <Carousel controlsOffset="lg" withIndicators loop>
            <CarouselSlide w="lg" >
                <Paper p="md" withBorder>
                    <Flex justify="center" align="flex-start" direction={{ base: "column-reverse", md: "row" }}>
                        <Box>
                            <Group align='center'>
                                <Paper p="3" radius="sm" shadow='xs' withBorder visibleFrom='lg' >
                                    <Skeleton height={50} width="5%" />
                                </Paper>
                                <Skeleton height={12} width="40%" />
                            </Group>
                        </Box>
                        <Box py="lg">
                            <Group gap={1}>
                                <Skeleton height={9} width="4%" />
                                <Skeleton height={9} width="10%" />
                            </Group>
                            <Group>
                                <Skeleton height={9} width="10%" />
                                <Skeleton height={9} width="10%" />
                            </Group>
                            <Text my="lg" trancate="end" visibleFrom='lg'>
                                <Skeleton height={9} width="20%" />
                                <Skeleton height={9} width="20%" />
                                <Skeleton height={9} width="20%" />
                                <Skeleton height={9} width="10%" />
                            </Text>
                            <Group>
                                <Skeleton height={9} width="5%" />
                                <Skeleton height={9} width="10%" />
                            </Group>
                        </Box>
                        <Box >
                            <Group justify='center' my="xs">
                                <Skeleton height={300} width="50%" radius="sm" />
                            </Group>
                        </Box>
                    </Flex>

                </Paper>
            </CarouselSlide>
        </Carousel>
    )
}
