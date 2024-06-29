// src/components/Tile.tsx
import { Box } from '@chakra-ui/react';

interface TileProps {
  number: number;
  color: string;
}

export default function Tile({ number, color }: TileProps) {
  const getColor = () => {
    switch (color) {
      case "red":
        return "red.500";
      case "blue":
        return "blue.500";
      case "black":
        return "black";
      case "yellow":
        return "yellow.500";
      case "joker":
        return "gray.500";
      default:
        return "gray.200";
    }
  };

  return (
    <Box
      width="50px"
      height="70px"
      bg="white"
      border="1px solid"
      borderColor="gray.300"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={getColor()}
      fontSize="lg"
      fontWeight="bold"
    >
      {number !== 0 ? number : "J"}
    </Box>
  );
}
