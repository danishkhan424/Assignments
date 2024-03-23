import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Fetch_Failure,
  Fetch_Request,
  Fetch_Success,
} from "../../Redux/actionTypes";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import TableData from "./TableData";
import Pagination from "./Pagination";

const Football = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetch);

  const { isLoading, isError, footballMatches, total_pages, page } = data;

  const fetchData = async () => {
    dispatch({ type: Fetch_Request });
    try {
      const res = await axios.get(
        `https://jsonmock.hackerrank.com/api/football_matches?page=${page}`
      );
      dispatch({
        type: Fetch_Success,
        payload: {
          footballMatches: res.data.data,
          total_pages: res.data.total_pages,
        },
      });
    } catch (error) {
      dispatch({ type: Fetch_Failure });
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Flex
      w={"100%"}
      mx={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      minH={"300px"}
    >
      {isLoading ? (
        <Box>Loading...</Box>
      ) : isError ? (
        <Box>Error...</Box>
      ) : (
        <Box textAlign={"center"}>
          <TableData MatchData={footballMatches} />
          <Pagination
            total_pages={total_pages}
            page={page}
            dispatch={dispatch}
          />
        </Box>
      )}
    </Flex>
  );
};

export default Football;
