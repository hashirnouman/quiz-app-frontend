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
import * as api from "../services/quiz.api";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/counterSlice";
import { calcLength } from "framer-motion";
let question_number = 0;
const Page1 = () => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(true);
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([]);
  const [page, setPage] = useState(0);
  const [questionId, setQuestionId] = useState("");
  const [optionId, setOptionId] = useState("");
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigte = useNavigate();
  const handleChange = () => {
    setValue();
    setDisable(false);
  };
  const handleBack = () => {
    if (page === 0) {
      setDisable(true);
      return;
    }
    setPage(page - 1);
  };
  const handleNext = async () => {
    const response = await api.checkAnswer({
      _id: questionId,
      optionid: optionId,
    });
    if (response.data === true) {
      console.log(response);
      dispatch(increment());
    }

    if (page === 2) {
      navigte("/score");
      return;
    }
    setPage(page + 1);
  };
  const get = async () => {
    const response = await api.getQuiz();
    setTitle(response.data[page].title);
    setQuestionId(response.data[page]._id);
    setOptions(response.data[page].options);
    console.log(response);
  };
  useEffect(() => {
    get();
  }, [page]);
  return (
    <div>
      <Center style={{ height: "70vh" }} gap={5}>
        {!disable ? <Button onClick={handleBack}>back</Button> : null}
        <Card height={430} width={430}>
          <CardBody>
            <Center flexDirection="column" gap={7}>
              <Text>{title} </Text>
              {counter}
              <Box>
                <RadioGroup onChange={handleChange} value={value}>
                  <Stack direction="column">
                    {options.map((option, index) => {
                      return (
                        <Radio
                          key={index}
                          value={option.text}
                          onClick={() => {
                            setOptionId(option._id);
                          }}
                        >
                          {option.text}
                        </Radio>
                      );
                    })}
                  </Stack>
                </RadioGroup>
              </Box>
            </Center>
          </CardBody>
        </Card>

        <>
          <Button
            colorScheme="blue"
            isDisabled={disable}
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </Button>
        </>
      </Center>
    </div>
  );
};

export default Page1;
