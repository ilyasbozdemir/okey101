// src/components/Main/(Game)/PlayerSeat.tsx
import { Box, VStack, Avatar, Text } from '@chakra-ui/react';

interface PlayerSeatProps {
  playerIndex: number;
  isCurrent: boolean;
  playerName: string | null;
}

export default function PlayerSeat({ playerIndex, isCurrent, playerName }: PlayerSeatProps) {
  return (
    <VStack>
      <Box borderWidth={isCurrent ? "2px" : "1px"} borderColor={isCurrent ? "green.500" : "gray.300"} p="2" borderRadius="md" textAlign="center">
        <Avatar size="md" name={playerName || `Oyuncu ${playerIndex + 1}`} mb="2" />
        <Box>
          <Text fontWeight="bold">{playerName || `Oyuncu ${playerIndex + 1}`}</Text>
          <Text>Puan: 0</Text>
        </Box>
      </Box>
    </VStack>
  );
}
