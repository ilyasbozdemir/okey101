// src/components/Main/(Game)/PlayerHand.tsx
import { Box, SimpleGrid } from '@chakra-ui/react';
import Tile from './Tile';
import { useGameState } from 'state/gameState';

export default function PlayerHand() {
  const { players, currentPlayer, discardTile } = useGameState();
  const playerTiles = players[currentPlayer].tiles;

  return (
    <Box mt="4">
      <SimpleGrid columns={[4, 8, 13]} spacing={2}>
        {playerTiles.map((tile, index) => (
          <Tile key={index} number={tile.number} color={tile.color} onClick={() => discardTile(tile)} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
