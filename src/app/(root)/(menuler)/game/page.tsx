// src/app/game/page.tsx
"use client"

import { Box, Button, Heading, VStack, Grid, GridItem, Input } from '@chakra-ui/react';
import { useGameState } from 'state/gameState';
import { useState } from 'react';
import GameBoard from 'components/Main/(Game)/GameBoard';
import PlayerHand from 'components/Main/(Game)/PlayerHand';
import PlayerSeat from 'components/Main/(Game)/PlayerSeat';
import ControlButtons from 'components/Main/(Game)/ControlButtons';

export default function GamePage() {
  const { tables, createTable, joinTable, startGame, setCurrentTable, currentTable } = useGameState();
  const [playerName, setPlayerName] = useState('');

  const currentTableData = tables.find(table => table.id === currentTable);
  const allPlayersJoined = currentTableData && currentTableData.players.length === 4;

  return (
    <Box textAlign="center" mt="50px">
      <Heading>Okey 101 Oyunu</Heading>
      {currentTable === null ? (
        <VStack spacing={4}>
          <Button colorScheme="teal" onClick={createTable}>Masa Oluştur</Button>
          <Heading size="md">Masalar</Heading>
          <VStack spacing={2}>
            {tables.map(table => (
              <Box key={table.id} borderWidth="1px" borderRadius="md" p="4">
                <Heading size="sm">Masa ID: {table.id}</Heading>
                <VStack mt="2">
                  {table.players.map(player => (
                    <Box key={player.id}>{player.name}</Box>
                  ))}
                  {table.players.length < 4 && (
                    <>
                      <Input
                        placeholder="Oyuncu Adı"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                      />
                      <Button colorScheme="teal" onClick={() => joinTable(table.id, playerName)}>
                        Masaya Katıl
                      </Button>
                    </>
                  )}
                </VStack>
                {table.players.length === 4 && (
                  <Button colorScheme="teal" onClick={() => {
                    setCurrentTable(table.id);
                    startGame();
                  }}>
                    Oyunu Başlat
                  </Button>
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6} mt="8" justifyItems="center" alignItems="center">
          {currentTableData && currentTableData.players.map((player, index) => (
            <GridItem key={index}>
              <PlayerSeat playerIndex={index} isCurrent={false} playerName={player.name} />
            </GridItem>
          ))}
          <GridItem rowSpan={2}>
            <GameBoard />
          </GridItem>
          <GridItem colSpan={3}>
            <PlayerHand />
          </GridItem>
          <GridItem colSpan={3}>
            <ControlButtons />
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}
