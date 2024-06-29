// src/components/PlayerInfo.tsx
import { Box, Text, VStack, Avatar } from '@chakra-ui/react';

interface PlayerInfoProps {
  name: string;
  score: number;
  isCurrent: boolean;
}

export default function PlayerInfo({ name, score, isCurrent }: PlayerInfoProps) {
  return (
    <VStack>
      <Box borderWidth={isCurrent ? "2px" : "1px"} borderColor={isCurrent ? "green.500" : "gray.300"} p="2" borderRadius="md" textAlign="center">
        <Avatar size="md" name={name} mb="2" />
        <Text fontWeight="bold">{name}</Text>
        <Text>Puan: {score}</Text>
      </Box>
    </VStack>
  );
}
