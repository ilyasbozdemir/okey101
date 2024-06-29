// src/app/game/page.tsx
"use client"

import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import ControlButtons from 'components/Main/(Game)/ControlButtons';
import GameBoard from 'components/Main/(Game)/GameBoard';
import PlayerHand from 'components/Main/(Game)/PlayerHand';
import PlayerInfo from 'components/Main/(Game)/PlayerInfo';
import { useGameState } from 'state/gameState';

export default function GamePage() {
  const { players, currentPlayer } = useGameState();

  return (
    <Box textAlign="center" mt="50px">
      <Heading>Okey 101 Oyunu</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="8">
        <GridItem>
          <PlayerInfo name="Oyuncu 1" score={0} isCurrent={currentPlayer === 0} />
        </GridItem>
        <GridItem>
          <GameBoard />
        </GridItem>
        <GridItem>
          <PlayerInfo name="Oyuncu 2" score={0} isCurrent={currentPlayer === 1} />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="8">
        <GridItem>
          <PlayerInfo name="Oyuncu 3" score={0} isCurrent={currentPlayer === 2} />
        </GridItem>
        <GridItem>
          <PlayerHand />
        </GridItem>
        <GridItem>
          <PlayerInfo name="Oyuncu 4" score={0} isCurrent={currentPlayer === 3} />
        </GridItem>
      </Grid>
      <ControlButtons />
    </Box>
  );
}
