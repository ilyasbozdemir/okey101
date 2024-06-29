// src/components/Main/Game/GameBoard.tsx
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Tile from './Tile';
import { useGameState } from 'state/gameState';

export default function GameBoard() {
  const { drawPile, discardPile } = useGameState();

  return (
    <VStack spacing={4}>
      <Box>
        <Text fontWeight="bold" mb="2">Çekme Yığını</Text>
        <SimpleGrid columns={13} spacing={2}>
          {drawPile.slice(0, 13).map((tile, index) => (
            <Tile key={index} tile={tile} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Text fontWeight="bold" mb="2">Atma Yığını</Text>
        <SimpleGrid columns={13} spacing={2}>
          {discardPile.slice(0, 13).map((tile, index) => (
            <Tile key={index} tile={tile} />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
