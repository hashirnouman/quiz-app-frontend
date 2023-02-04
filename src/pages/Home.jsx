import {
  Box,
  Button,
  Center,
  Text,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Center>
        <Box boxShadow="md" width={1000} height={400} p={30}>
          <VStack gap={4}>
            <Text>Welcome to the quiz Sign in</Text>
            <FormControl gap={3}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <Spacer />
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button>Login</Button>
          </VStack>
        </Box>
      </Center>
    </div>
  );
};

export default Home;
