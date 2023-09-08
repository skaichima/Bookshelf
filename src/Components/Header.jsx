import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import image1 from "../Assets/image 1.svg";
import label from "../Assets/Lable.svg";

export default function Header() {
  return (
    <Box as="section" px="5" pb="30px">
      <Heading
        as="h1"
        textTransform="uppercase"
        w="100%"
        fontSize={72.5}
        fontFamily="sans-serif"
        textAlign="center"
      >
        reading makes the world huge
      </Heading>
      <Flex gap={3}>
        <Box
          h="400px"
          px={5}
          py={10}
          bg="blackAlpha.800"
          w="50%"
          borderRadius="20px"
          overflow="hidden"
          position="relative"
        >
          <Box
            transform="rotateY(180deg) scale(2.4)"
            h="100%"
            position="absolute"
            right={5}
            top={280}
          >
            <CiSearch
              color="rgba(0, 0, 0, 0.3)"
              fontSize={200}
              fontWeight="bold"
              height="100%"
            />
          </Box>
          <Box>
            <Heading
              as="h2"
              color="white"
              fontWeight="medium"
              w="50%"
              textTransform="uppercase"
              mb={4}
            >
              find something to read
            </Heading>
            <Text color="whiteAlpha.700" w="60%" textAlign="justify">
              Fancy something unusual and unpredictable? Funny or exciting? No
              problem. Check out the collections we have prepared for you.
            </Text>
            <Button
              colorScheme="yellow"
              fontSize={20}
              p={7}
              mt={20}
              textTransform="uppercase"
            >
              <Link to="/books">browse now</Link>
            </Button>
          </Box>
        </Box>
        <Box
          h="400px"
          w="50%"
          borderRadius="20px"
          overflow="hidden"
          position="relative"
        >
          <Img src={label} position="absolute" left={5} top={5} />
          <Img src={image1} w="100%" h="100%" objectFit="cover" />
        </Box>
      </Flex>
    </Box>
  );
}
