import { Card, Image, Text, Group, Badge, Button, CardSection, Rating, rem } from '@mantine/core';
import { IconClock, IconMapPin } from '@tabler/icons-react';


export function EventCard({ data }) {

    return (
        <Card withBorder radius="md" className="hover:-translate-y-1 hover:scale-95 duration-300" >
            <CardSection>
                <Image src={data.image} alt="" h={"auto"} />
            </CardSection>

            <Group justify="space-between" my="sm">
                <div>
                    <Text fz="sm" c="red.5">Event</Text>
                    <Text fw={500}>{data.title}</Text>
                    <Group gap={1} align='center'>
                        <IconMapPin style={{ width: rem(14) }} />
                        <Text fz="xs" c="dimmed">
                            {data.venue}
                        </Text>
                    </Group>
                    <Group gap={1} align='center'>
                        <IconClock style={{ width: rem(14) }} />
                        <Text fz="xs" c="dimmed">
                            {data.startTime} - {data.endTime}
                        </Text>
                    </Group>
                </div>
                {/* <Badge variant="outline">25% off</Badge> */}
            </Group>

            <CardSection p="sm" className='border-t' >
                <Group gap={30}>
                    <div>
                        <Text fz="md" fw={700} style={{ lineHeight: 1 }}>
                            Ksh {data.price}
                        </Text>
                        <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                            per person
                        </Text>
                    </div>

                    <Button radius="xl" color="red.5" style={{ flex: 1 }}>
                        Get Ticket
                    </Button>
                </Group>
            </CardSection>
        </Card>
    );
}