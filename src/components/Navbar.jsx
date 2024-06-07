import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="primary.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        
        <Flex alignItems={"center"}>
          <Link as={RouterLink} to="/" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("primary.600", "primary.400") }} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("primary.600", "primary.400") }} color="white">
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;