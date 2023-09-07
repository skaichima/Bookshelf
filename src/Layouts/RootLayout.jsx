import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Box as="div" bg='blackAlpha.50'>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </Box>
  )
}
