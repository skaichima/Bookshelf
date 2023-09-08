import { Box, Heading } from "@chakra-ui/react";
import BestsellerGrid from "./BestsellerGrid";

export default function Bestsellers() {
  return (
    <Box as="section" w='100%' bg='blackAlpha.800' py={10} px={5}>
        <Heading as='h3' fontSize='28' fontWeight='normal' color='white' mb={10}>BESTSELLERS</Heading>
        <BestsellerGrid />
    </Box>
  )
}
