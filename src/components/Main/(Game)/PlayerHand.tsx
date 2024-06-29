// src/components/Main/Game/PlayerHand.tsx
import { Box, SimpleGrid } from '@chakra-ui/react';
import Tile from './Tile';

interface PlayerHandProps {
  player: {
    id: number;
    name: string;
    tiles: {
      number: number;
      color: string;
    }[];
  };
  discardTile: (playerId: number, tile: { number: number; color: string }) => void;
}

export default function PlayerHand({ player, discardTile }: PlayerHandProps) {
  return (
    <Box>
      <SimpleGrid columns={14} spacing={2}>
        {player.tiles.map((tile, index) => (
          <Tile key={index} tile={tile} onClick={() => discardTile(player.id, tile)} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
