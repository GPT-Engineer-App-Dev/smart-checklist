import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Box, Flex } from "@chakra-ui/react";
import { FaTrash, FaSmileWink } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <VStack spacing={2} w="100%">
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md">
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <Text flex="1" textDecoration={task.completed ? "line-through" : "none"}>
                {task.text}
              </Text>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    py={4}
    px={8}
    bg="teal.500"
    color="white"
    position="fixed"
    bottom="0"
    width="100%"
    textAlign="center"
  >
    <Text fontSize="lg">
      Keep calm and carry on ticking tasks off your list! <FaSmileWink />
    </Text>
  </Box>
);

export default Index;