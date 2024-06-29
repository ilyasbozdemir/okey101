// src/components/GameBoard.tsx
import { Box, SimpleGrid } from '@chakra-ui/react';
import Tile from './Tile';

// Okey taşları (numaralar ve renkler)
const colors = ["red", "blue", "black", "yellow"];
const tiles = [];
for (let i = 1; i <= 13; i++) {
  colors.forEach(color => {
    tiles.push({ number: i, color });
    tiles.push({ number: i, color });
  });
}
// İki sahte okey taşı ekle
tiles.push({ number: 0, color: "joker" });
tiles.push({ number: 0, color: "joker" });

export default function GameBoard() {
  return (
    <Box>
      <SimpleGrid columns={13} spacing={4}>
        {tiles.map((tile, index) => (
          <Tile key={index} number={tile.number} color={tile.color} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
