import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Books() {
  return (
    <Flex as='section'>
      <Box display='flex' flexDirection='row' gap={20} overflow='hidden' bg='yellow.400' py='5' w='100%' fontSize={24} my={5}>
        <Heading fontWeight='normal' w='300px' color='yellow.500'>ALL BOOKS</Heading>
        <Flex w='100%'>
          <Heading fontWeight='normal' color='yellow.500'>ALL BOOKS</Heading>
          <Heading fontWeight='normal' color='yellow.500'>ALL BOOKS</Heading>
          <Heading fontWeight='normal' color='yellow.500'>ALL BOOKS</Heading>
        </Flex>
        <Heading fontWeight='normal' color='yellow.500'>ALL BOOKS</Heading>
      </Box>
    </Flex>
  )
}
