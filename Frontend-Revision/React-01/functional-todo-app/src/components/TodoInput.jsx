import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const TodoInput = () => {
  return (
    <Box>
      <Box mt={5} w={"50%"} mx={"auto"}>
        <FormControl>
          <form>
            <FormLabel for="title" fontSize={"lg"}>
              Title:
              <Input
                ml={2}
                w={"80%"}
                id="title"
                type="text"
                placeholder="Enter Todo"
              />
            </FormLabel>
            <FormLabel fontSize={"lg"}>
              Status:
              <Checkbox
                size="lg"
                ml={2}
                mt={1}
                colorScheme="teal"
                defaultIsChecked
              />
            </FormLabel>
            <FormLabel for="assignee" fontSize={"lg"}>
              Assigned to:
              <Input
                ml={2}
                w={"80%"}
                type="text"
                id="assignee"
                placeholder="Enter Name"
              />
                      </FormLabel>
                      
          </form>
        </FormControl>
      </Box>
    </Box>
  );
};

export default TodoInput;
