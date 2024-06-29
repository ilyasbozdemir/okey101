// src/app/game/page.tsx
"use client"

import { Box, Button, Heading, VStack, SimpleGrid, Grid, GridItem, HStack } from '@chakra-ui/react';
import ControlButtons from 'components/Main/(Game)/ControlButtons';
import PlayerSeat from 'components/Main/(Game)/PlayerSeat';
import Tile from 'components/Main/(Game)/Tile';
import { useState } from 'react';
import { useGameState } from 'state/gameState';

export default function GamePage() {
  const { players, drawPile, discardPile, createPlayers, drawTile, discardTile, currentPlayer } = useGameState();
  const [playerNames, setPlayerNames] = useState(["Ahmet", "Yaşar", "Aslı", "Ali"]);

  if (players.length === 0) {
    createPlayers(playerNames);
  }

  return (
    <Box textAlign="center" mt="50px">
      <Heading>Okey 101 Oyunu</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} mt="8">
        {players.map((player, index) => (
          <GridItem key={player.id} colSpan={index === 0 ? 3 : 1}>
            <PlayerSeat player={player} isCurrent={index === currentPlayer} />
          </GridItem>
        ))}
        <GridItem colSpan={3}>
          <VStack spacing={4}>
            <Heading size="md">Çekme Yığını</Heading>
            <SimpleGrid columns={13} spacing={2}>
              {drawPile.slice(0, 13).map((tile, index) => (
                <Tile key={index} tile={tile} />
              ))}
            </SimpleGrid>
            <Heading size="md">Atma Yığını</Heading>
            <SimpleGrid columns={13} spacing={2}>
              {discardPile.slice(0, 13).map((tile, index) => (
                <Tile key={index} tile={tile} />
              ))}
            </SimpleGrid>
            <ControlButtons drawTile={() => drawTile(currentPlayer)} />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
