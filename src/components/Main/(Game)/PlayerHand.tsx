// src/components/PlayerHand.tsx
import { Box, SimpleGrid } from '@chakra-ui/react';
import Tile from './Tile';
import { useGameState } from 'state/gameState';

export default function PlayerHand() {
  const { playerTiles, discardTile } = useGameState();
  return (
    <Box mt="4">
      <SimpleGrid columns={13} spacing={4}>
        {playerTiles.map((tile, index) => (
          <Tile key={index} number={tile.number} color={tile.color} onClick={() => discardTile(tile)} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
