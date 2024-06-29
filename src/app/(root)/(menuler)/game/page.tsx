// src/app/game/page.tsx
"use client"

import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import GameBoard from 'components/Main/(Game)/GameBoard';
import PlayerHand from 'components/Main/(Game)/PlayerHand';
import { useGameState } from 'state/gameState';

export default function GamePage() {
  const { drawTile } = useGameState();
  return (
    <Box textAlign="center" mt="50px">
      <Heading>Okey 101 Oyunu</Heading>
      <Flex justifyContent="center" mt="8">
        <GameBoard />
      </Flex>
      <Box mt="8">
        <Heading size="md">Elinizdeki Taşlar</Heading>
        <PlayerHand />
      </Box>
      <Button mt="4" colorScheme="teal" onClick={drawTile}>
        Taş Çek
      </Button>
    </Box>
  );
}
