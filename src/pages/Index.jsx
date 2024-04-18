import { Box, Flex, Text, Heading, Image, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl" mb={4}>
          John Adams
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585076800246-4562eb6d6f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKb2huJTIwQWRhbXMlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTM0MDQ4MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Adams" mb={4} />
        <Text mt={4}>Hi, I'm John Adams, a passionate software developer with a focus on modern web technologies. I specialize in React and Node.js and have experience working with a variety of other technologies including Docker, Kubernetes, and AWS. I'm always eager to learn new things and take on challenging projects.</Text>
      </Box>
      <VStack mt={10} spacing={5}>
        <Heading fontSize="2xl">Connect with me</Heading>
        <Flex>
          <Link href="https://linkedin.com/in/johnadams" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="blue" />
          </Link>
          <Link href="https://github.com/johnadams" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" ml={2} />
          </Link>
          <Link href="mailto:john.adams@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" ml={2} colorScheme="red" />
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
