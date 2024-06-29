// src/components/Main/Game/PlayerSeat.tsx
import { Box, VStack, Avatar, Text } from '@chakra-ui/react';

interface PlayerSeatProps {
  player: {
    id: number;
    name: string;
  };
  isCurrent: boolean;
}

export default function PlayerSeat({ player, isCurrent }: PlayerSeatProps) {
  return (
    <VStack>
      <Box borderWidth={isCurrent ? "2px" : "1px"} borderColor={isCurrent ? "green.500" : "gray.300"} p="2" borderRadius="md" textAlign="center">
        <Avatar size="md" name={player.name} mb="2" />
        <Box>
          <Text fontWeight="bold">{player.name}</Text>
          <Text>Puan: 0</Text>
        </Box>
      </Box>
    </VStack>
  );
}
