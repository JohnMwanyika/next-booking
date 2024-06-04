import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Header/Navbar";

export default function HomeLayout({ children }) {
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}