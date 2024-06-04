import { HeroSlider } from "@/components/Carousels/HeroSlider/HeroSlider";
import LatestAirBnB from "@/components/Carousels/LatestAirBnB/LatestAirBnB";
import LatestEvents from "@/components/Carousels/LatestEvents/LatestEvents";
import { Box, Container, Divider, Group, Text, Title } from "@mantine/core";

export default function Home() {
    return (
        <Container size="fluid" p="md" style={{ marginTop: "45px" }}>
            {/* Main Slider */}
            <Box>
                <HeroSlider />
            </Box>

            <Divider my="sm" />
            {/* Latest AirBnBs */}
            <Box my="md" py="md">
                <Group p="md" align="center" justify="space-between">
                    <Title order={3}>Latest <span className="text-red-500">AirBnB's</span></Title>
                    <Text>View All</Text>
                </Group>
                <LatestAirBnB />
            </Box>

            <Divider my="sm" />

            {/* Latest Events */}
            <Box my="md" py="md">
                <Group p="md" align="center" justify="space-between">
                    <Title order={3}>Latest <span className="text-red-500">Events</span></Title>
                    <Text>View All</Text>
                </Group>
                < LatestEvents />
            </Box>
        </Container>
    )
}