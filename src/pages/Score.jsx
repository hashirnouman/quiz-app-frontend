import {
  Card,
  CardBody,
  Text,
  Center,
  Box,
  RadioGroup,
  Radio,
  Stack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Score = () => {
  const counter = useSelector((state) => state.counter.value);
  return (
    <div>
      {" "}
      <Center style={{ height: "70vh" }} gap={5}>
        <Button
          onClick={() => {
            navigate("/page1");
          }}
        >
          back
        </Button>
        <Card height={430} width={430}>
          <CardBody>your score is {counter}/3</CardBody>
        </Card>
      </Center>
    </div>
  );
};

export default Score;
