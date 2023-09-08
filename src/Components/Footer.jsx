import { NavLink } from "react-router-dom";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import logo from "../Assets/Logo.svg";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <Flex
      as="nav"
      bg="blackAlpha.800"
      color="white"
      direction='column'
      align="center"
    >
      <Box w='100%' p="5" display='flex' justifyContent="space-between" flexDirection='row'>
        <Flex align="center" gap={4}>
          <Image FlexSize="10px" objectFit="contain" src={logo} alt="logo" />
          <Text fontWeight={600}>
            <NavLink to="/">BOOKSHELF</NavLink>
          </Text>
        </Flex>
        <Flex align="center" gap={4} fontSize={20}>
          <BsInstagram />
          <BsTwitter />
          <BsFacebook />
        </Flex>
      </Box>
      <Box bg='blackAlpha.900' w='100%' display='flex' gap={4} px={5} py={3} fontSize={12}>
        <Text>Terms and Conditions</Text>
        <Text>Privacy policy</Text>
      </Box>
    </Flex>
  );
}
