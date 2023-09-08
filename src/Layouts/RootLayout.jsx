import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <Box as="div" bg='blackAlpha.50' pt={2}>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </Box>
  )
}
