import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Header/Navbar";
import { Affix, Container } from "@mantine/core";

export default function HomeLayout({ children }) {
    return (
        <Container fluid>

            <Affix position={{ top: 0, left: 0, right: 0 }} >
                <Navbar />
            </Affix>

            {children}
            <Footer />
        </Container>
    )
}