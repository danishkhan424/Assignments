import { Box, Button, Checkbox, FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../Redux/actionTypes";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: AddTodo,
        payload: { title, status: status, id: Date.now().toString().slice(-4) },
      });
      setTitle("");
      setStatus(false);
    }
  };

  return (
    <Box mt={10} mx={"auto"}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Box width={"40%"} mx={"auto"}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              w={"100%"}
              placeholder="add to do here"
            />
            <Box mt={5}>
              <Checkbox
                mr={5}
                isChecked={status}
                onChange={(e) => setStatus(e.target.checked)}
              >
                Status
              </Checkbox>
              <Button type="submit">Add</Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default TodoInput;
