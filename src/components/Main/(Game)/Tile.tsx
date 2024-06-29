// src/components/Main/Game/Tile.tsx
import { Box, Text } from '@chakra-ui/react';

interface TileProps {
  tile: {
    number: number;
    color: string;
  };
  onClick?: () => void;
}

export default function Tile({ tile, onClick }: TileProps) {
  return (
    <Box
      width="40px"
      height="60px"
      borderWidth="1px"
      borderRadius="md"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor={onClick ? 'pointer' : 'default'}
      bg={tile.color === 'joker' ? 'gray.300' : 'white'}
      onClick={onClick}
    >
      <Text>{tile.number}</Text>
    </Box>
  );
}
