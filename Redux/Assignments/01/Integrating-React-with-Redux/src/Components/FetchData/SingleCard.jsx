import { Td, Tr } from "@chakra-ui/react";

const SingleCard = ({ MatchData }) => {
  return (
    <>
      {MatchData &&
        MatchData.map((data, i) => (
          <Tr>
            <Td>{i + 1}</Td>
            <Td>{data.competition}</Td>
            <Td>{data.round}</Td>
            <Td>{data.team1}</Td>
            <Td>{data.team1goals}</Td>
            <Td>{data.team2}</Td>
            <Td>{data.team2goals}</Td>
            <Td>{data.year}</Td>
          </Tr>
        ))}
    </>
  );
};

export default SingleCard;
