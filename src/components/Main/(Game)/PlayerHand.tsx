// src/components/PlayerHand.tsx
import { Box, SimpleGrid } from '@chakra-ui/react';
import Tile from './Tile';

const playerTiles = Array(21).fill(0).map((_, index) => ({
  number: (index % 13) + 1,
  color: "red"
})); 

export default function PlayerHand() {
  return (
    <Box mt="4">
      <SimpleGrid columns={13} spacing={4}>
        {playerTiles.map((tile, index) => (
          <Tile key={index} number={tile.number} color={tile.color} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
