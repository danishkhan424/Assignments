import { Box } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { DeleteTodo } from "../Redux/actionTypes";

const TodoData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <TableContainer w={"60%"} mx={"auto"} mt={10}>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>S.No.</Th>
            <Th>Title</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((task, i) => (
              <Tr key={task.id}>
                <Td>{i + 1}</Td>
                <Td>{task.title}</Td>
                <Td>{task.status ? "Completed" : "Not Completed"}</Td>
                <Td>
                  <Box
                    onClick={() =>
                      dispatch({ type: DeleteTodo, payload: task.id })
                    }
                    color="red"
                    cursor="pointer"
                  >
                    Delete
                  </Box>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TodoData;
