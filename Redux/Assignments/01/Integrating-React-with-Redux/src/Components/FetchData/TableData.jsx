import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import SingleCard from "./SingleCard";

const TableData = ({ MatchData }) => {
  return (
    <TableContainer w={"100%"} mx={"auto"} mt={10} c>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th colSpan={8} fontSize={"30px"}>
              Football Competition
            </Th>
          </Tr>
          <Tr>
            <Th>S.No.</Th>
            <Th>Competition</Th>
            <Th>Round</Th>
            <Th>Team 1</Th>
            <Th>Team 1 Goals</Th>
            <Th>Team 2</Th>
            <Th>Team 2 Goals</Th>
            <Th>Year</Th>
          </Tr>
        </Thead>
        <Tbody>
          <SingleCard MatchData={MatchData} />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
