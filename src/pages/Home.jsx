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
import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import * as api from "../services/auth.api";

const Home = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const response = await api.login({
      username: username,
      password: password,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.accessToken);
      navigate("/page1");
    }
  };
  return (
    <div>
      <Center>
        <Box boxShadow="md" width={1000} height={400} p={30}>
          <VStack gap={4}>
            <Text>Welcome to the quiz Sign in</Text>
            <form onSubmit={(e) => login(e)}>
              <FormLabel>username</FormLabel>
              <Input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                required
              />
              <Spacer />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button type="submit">Login</Button>
            </form>
          </VStack>
        </Box>
      </Center>
    </div>
  );
};

export default Home;
