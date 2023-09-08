import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { BiComment, BiStar } from "react-icons/bi";
import { CiBookmark } from 'react-icons/ci';
import img from "../Assets/image 2.svg";

export default function BestsellerGridItem({ item }) {
  return (
    <GridItem
      position="relative"
      bg="white"
      h="180px"
      borderRadius="2xl"
      dir="ltr"
      overflow="hidden"
      border="none"
      display="flex"
      p={5}
      gap={2}
    >
      <Image src={img} borderRadius="lg" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex direction="column" gap={1}>
          <Text fontSize="sm">{item.author}</Text>
          <Text fontWeight="bold">{item.name}</Text>
        </Flex>
        <Flex direction="column" gap={1}>
          <Text
            display="flex"
            flexDirection="row"
            alignItems="center"
            border="1px"
            textAlign="center"
            w="fit-content"
            px={2}
            borderRadius="12px"
          >
            {item.reviews}
            <BiComment />
          </Text>
          <Text
            display="flex"
            flexDirection="row"
            alignItems="center"
            border="1px"
            textAlign="center"
            w="fit-content"
            px={2}
            borderRadius="12px"
          >
            {item.rating}
            <BiStar />
            {item.raters}
          </Text>
        </Flex>
      </Box>
      <Box position='absolute' cursor='pointer' bg='blackAlpha.800' right='5' p={2} borderRadius='full' color='white'>
        <CiBookmark />
      </Box>
    </GridItem>
  );
}
