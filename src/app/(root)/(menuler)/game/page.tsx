// src/app/game/page.tsx
"use client"

import { Box, Button, Flex, Heading, VStack, Grid, GridItem } from '@chakra-ui/react';
import GameBoard from 'components/Main/(Game)/GameBoard';
import PlayerHand from 'components/Main/(Game)/PlayerHand';
import PlayerInfo from 'components/Main/(Game)/PlayerInfo';
import { useGameState } from 'state/gameState';

export default function GamePage() {
  const { drawTile, players, currentPlayer } = useGameState();

  return (
    <Box textAlign="center" mt="50px">
      <Heading>Okey 101 Oyunu</Heading>
      <Grid templateColumns={['1fr', '1fr 3fr 1fr']} gap={6} mt="8">
        <GridItem>
          {players.map((player, index) => (
            <PlayerInfo key={index} name={`Oyuncu ${index + 1}`} score={0} isCurrent={currentPlayer === index} />
          ))}
        </GridItem>
        <GridItem>
          <GameBoard />
        </GridItem>
        <GridItem>
          {players.map((player, index) => (
            <PlayerInfo key={index} name={`Oyuncu ${index + 1}`} score={0} isCurrent={currentPlayer === index} />
          ))}
        </GridItem>
      </Grid>
      <Box mt="8">
        <Heading size="md">Elinizdeki Taşlar</Heading>
        <PlayerHand />
      </Box>
      <VStack mt="4">
        <Button colorScheme="teal" onClick={drawTile}>
          Taş Çek
        </Button>
        <Button colorScheme="teal">
          Çift Aç
        </Button>
        <Button colorScheme="teal">
          Seri Diz
        </Button>
        <Button colorScheme="teal">
          Geri Al
        </Button>
      </VStack>
    </Box>
  );
}
