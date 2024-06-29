// src/components/Main/(Game)/PlayerInfo.tsx
import { Box, Text, VStack } from '@chakra-ui/react';

interface PlayerInfoProps {
  name: string;
  score: number;
  isCurrent: boolean;
}

export default function PlayerInfo({ name, score, isCurrent }: PlayerInfoProps) {
  return (
    <VStack>
      <Box borderWidth={isCurrent ? "2px" : "1px"} borderColor={isCurrent ? "green.500" : "gray.300"} p="2" borderRadius="md">
        <Text fontWeight="bold">{name}</Text>
        <Text>Puan: {score}</Text>
      </Box>
    </VStack>
  );
}
