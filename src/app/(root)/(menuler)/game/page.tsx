// src/app/game/page.tsx
import { Box, Flex, Heading } from '@chakra-ui/react';
import GameBoard from 'components/Main/(Game)/GameBoard';
export default function GamePage() {
  return (
    <Box textAlign="center" mt="50px">
      <Heading>Okey 101 Oyunu</Heading>
      <Flex justifyContent="center" mt="8">
        <GameBoard />
      </Flex>
    </Box>
  );
}
