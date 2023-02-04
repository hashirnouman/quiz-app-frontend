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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../redux/slices/counterSlice";
const Page2 = () => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <Center style={{ height: "70vh" }} gap={5}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </Button>
        <Card height={430} width={430}>
          <CardBody>
            <Center flexDirection="column" gap={7}>
              <Text>How many countries </Text>
              <Box>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column">
                    <Radio
                      value="1"
                      onClick={() => {
                        setDisable(false);
                        dispatch(increment());
                      }}
                    >
                      198
                    </Radio>
                    <Radio
                      value="2"
                      onClick={() => {
                        setDisable(false);
                      }}
                    >
                      7
                    </Radio>
                    <Radio
                      value="3"
                      onClick={() => {
                        setDisable(false);
                      }}
                    >
                      1
                    </Radio>
                    <Radio
                      value="4"
                      onClick={() => {
                        setDisable(false);
                      }}
                    >
                      9
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Center>
          </CardBody>
        </Card>
        <Link to="/score">
          <Button colorScheme="blue" isDisabled={disable}>
            Next question
          </Button>
        </Link>
      </Center>
    </div>
  );
};

export default Page2;
