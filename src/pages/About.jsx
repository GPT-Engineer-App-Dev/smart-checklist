import { Box, Heading, Text, VStack, Container, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => (
  <Container maxW="container.lg" py={10}>
    <VStack spacing={8} align="start">
      <Flex w="100%" justify="space-between" align="center">
        <Heading as="h1" size="xl">About Us</Heading>
        <Link as={RouterLink} to="/" color="primary.500" fontWeight="bold">
          Home
        </Link>
      </Flex>
      <Box>
        <Text fontSize="lg">
          Welcome to our Todo App! This application is designed to help you manage your tasks efficiently and effectively.
        </Text>
      </Box>
      <Box>
        <Heading as="h2" size="md">Features</Heading>
        <Text fontSize="md">
          - Add, delete, and mark tasks as completed.<br />
          - User-friendly interface.<br />
          - Responsive design for both desktop and mobile devices.
        </Text>
      </Box>
      <Box>
        <Heading as="h2" size="md">Our Team</Heading>
        <Text fontSize="md">
          This app was created by a dedicated team of developers who are passionate about making your life easier.
        </Text>
      </Box>
    </VStack>
  </Container>
);

export default About;