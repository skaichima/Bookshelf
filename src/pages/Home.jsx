import { Link } from "react-router-dom";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import Header from "../Components/Header";
import Bestsellers from "../Components/Bestsellers";

export default function Home() {
  return (
    <Box w="100%" mx="0">
      <Header />
      <Bestsellers />
      <Center w="100%" p={10} bg="blackAlpha.50">
        <Box
          w="100%"
          borderRadius="2xl"
          display="flex"
          flexDirection="row"
          justifyContent='space-between'
          h="200px"
          overflow="hidden"
          p={8}
          bg="blackAlpha.800"
          position="relative"
        >
          <Flex direction="column" maxW="50%" color="white">
            <Text fontSize={28} mb={3}>
              DECIDING WHAT TO READ NEXT?
            </Text>
            <Text fontSize={14} maxW="400px">
              You're in the right place. Tell us what titles or genres you're
              interested in the past, and we'll give you surprising insightful
              recommendations.
            </Text>
          </Flex>
          <Button colorScheme="yellow" h='100%' w='150px'>
            <Link to='/books'>
              <BsArrowDownRight fontSize='100px' />
            </Link>
          </Button>
          <Box
            position="absolute"
            transform="rotateZ(45deg) scale(2.4)"
            right={300}
            top={50}
          >
            <FaQuestion fontSize="145px" color="rgba(0, 0, 0, 0.3)" />
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
