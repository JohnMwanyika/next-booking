import { MantineProvider } from "@mantine/core";

export default function AuthLayout({ children }) {
    return (
        <>
            <MantineProvider>
                {children}
            </MantineProvider>
        </>
    )
}