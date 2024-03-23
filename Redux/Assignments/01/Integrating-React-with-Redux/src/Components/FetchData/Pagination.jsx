import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { Page } from "../../Redux/actionTypes";

const Pagination = ({ total_pages, page, dispatch }) => {
  // we don't want total pages for now, as we have more than 1000 pages
  return (
    <ButtonGroup
      mx={"auto"}
      variant="outline"
      colorScheme="teal"
      spacing="6"
      mt={6}
    >
      <Button
        onClick={() => dispatch({ type: Page, payload: page - 1 })}
        isDisabled={page === 1}
      >
        Prev
      </Button>
      <Button
        onClick={() => dispatch({ type: Page, payload: page + 1 })}
        isDisabled={page === total_pages}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
