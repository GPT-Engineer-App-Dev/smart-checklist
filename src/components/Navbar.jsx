import { Box, Flex, Link, useColorModeValue, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Heading as="h1" size="lg" fontWeight="bold" color={useColorModeValue("gray.800", "white")}>
          Todo App
        </Heading>
        <Flex alignItems={"center"}>
          <Link as={RouterLink} to="/" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;