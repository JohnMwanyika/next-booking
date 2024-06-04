import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Header/Navbar";
import { PropertyCard } from "@/components/propertyCard/PropertyCard";
import { Box, Button, Container, Flex, Group, HoverCard, HoverCardDropdown, HoverCardTarget, Paper, SimpleGrid, Text } from "@mantine/core";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <Container>
        <Flex justify={"flex-start"} align={"flex-start"} gap="md" direction={{ base: 'column', sm: 'row', md: 'column', lg: "row" }}>
          <PropertyCard className="" />
          <PropertyCard className="" />
          <PropertyCard className="" />
          <PropertyCard className="" />
          <PropertyCard className="" />
        </Flex>
      </Container>


      <Footer />
    </main >
  );
}
