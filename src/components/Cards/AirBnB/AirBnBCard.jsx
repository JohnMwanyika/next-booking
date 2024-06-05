import { Card, Image, Text, Group, Badge, Center, Button, CardSection, Rating, rem } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconMapPin, IconUsers } from '@tabler/icons-react';

export function AirBnBCard({ data }) {
    return (
        <Card withBorder radius="md" className="hover:-translate-y-1 hover:scale-95 duration-300">
            <CardSection>
                <Image src={data.image} alt="" h="auto" />
            </CardSection>

            <Group justify="space-between" my="sm">
                <div>
                    <Text fz="sm" c="red.5">Appartment</Text>
                    <Text fw={500}>{data.title}</Text>
                    <Group gap={1} align='center'>
                        <IconMapPin style={{ width: rem(14) }} />
                        <Text fz="xs" c="dimmed">
                            {data.location}
                        </Text>
                    </Group>
                    <Group gap={1}>
                        <Rating value={data.rating} fractions={2} readOnly />
                        <Text c="dimmed" fz="xs">({data.reviews || 0} reviews)</Text>
                    </Group>
                </div>
                <Badge variant="outline">25% off</Badge>
            </Group>

            <CardSection p="sm" className='border-t' >
                <Group gap={30}>
                    <div>
                        <Text fz="md" fw={700} style={{ lineHeight: 1 }}>
                            Ksh {data.price}
                        </Text>
                        <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                            per day
                        </Text>
                    </div>

                    <Button radius="xl" color="red.5" style={{ flex: 1 }}>
                        Book now
                    </Button>
                </Group>
            </CardSection>
        </Card>
    );
}