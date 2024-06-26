import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Box, Flex, Heading } from "@chakra-ui/react";
import { FaTrash, FaSmileWink } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

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

  const startEditing = (index, text) => {
    setEditingIndex(index);
    setEditedTask(text);
  };

  const saveTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editedTask } : task
    );
    setTasks(newTasks);
    setEditingIndex(null);
    setEditedTask("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="2xl" mb={6}>Todo App</Heading>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="green">
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
              {editingIndex === index ? (
                <Input
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") saveTask(index);
                  }}
                />
              ) : (
                <Text flex="1" textDecoration={task.completed ? "line-through" : "none"}>
                  {task.text}
                </Text>
              )}
              {editingIndex === index ? (
                <Button onClick={() => saveTask(index)} colorScheme="blue">
                  Save
                </Button>
              ) : (
                <Button onClick={() => startEditing(index, task.text)} colorScheme="primary">
                  Edit
                </Button>
              )}
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
                colorScheme="secondary"
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
    bg="primary.500"
    color="white"
    width="100%"
    textAlign="center"
  >
    <Text fontSize="lg">
      Keep calm and carry on ticking tasks off your list! <FaSmileWink />
    </Text>
  </Box>
);

export default Index;