// src/components/Main/(Game)/GameBoard.tsx
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Tile from './Tile';
import { useGameState } from 'state/gameState';

export default function GameBoard() {
  const { drawPile, discardPile } = useGameState();
  
  return (
    <Box>
      <Text fontWeight="bold">Çekme Yığını</Text>
      <SimpleGrid columns={13} spacing={4}>
        {drawPile.map((tile, index) => (
          <Tile key={index} number={tile.number} color={tile.color} />
        ))}
      </SimpleGrid>
      <Text fontWeight="bold" mt="4">Atma Yığını</Text>
      <SimpleGrid columns={13} spacing={4}>
        {discardPile.map((tile, index) => (
          <Tile key={index} number={tile.number} color={tile.color} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
