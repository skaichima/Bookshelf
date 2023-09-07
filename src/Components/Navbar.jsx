import { NavLink } from "react-router-dom";
import { Flex, Button, Text, Image } from "@chakra-ui/react";
import logo from "../Assets/Logo.svg";
import { CiSearch, CiBookmark } from 'react-icons/ci';

export default function Navbar() {
  return (
    <Flex as="nav" bg="blackAlpha.800" color="white" p="5" justify={"space-between"} m={2} borderRadius={18} align='center'>
      <Flex align='center' gap={4}>
        <Image FlexSize="10px" objectFit="contain" src={logo} alt="logo" />
        <Text fontWeight={600}>
          <NavLink to="/">BOOKSHELF</NavLink>
        </Text>
      </Flex>
      <Flex align='center' gap={4}>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/authors">Authors</NavLink>
        <NavLink to="/About">About us</NavLink>
      </Flex>
      <Flex align='center' gap={4} fontSize={20}>
        <CiSearch />
        <CiBookmark />
        <Button colorScheme='yellow' p={4} fontSize={14} >LOGIN</Button>
      </Flex>
    </Flex>
  );
}
