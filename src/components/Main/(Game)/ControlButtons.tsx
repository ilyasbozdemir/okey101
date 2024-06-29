// src/components/Main/Game/ControlButtons.tsx
import { HStack, Button } from '@chakra-ui/react';

interface ControlButtonsProps {
  drawTile: () => void;
}

export default function ControlButtons({ drawTile }: ControlButtonsProps) {
  return (
    <HStack mt="4" justifyContent="center">
      <Button colorScheme="teal" onClick={drawTile}>Taş Çek</Button>
      <Button colorScheme="teal">Çift Aç</Button>
      <Button colorScheme="teal">Seri Diz</Button>
      <Button colorScheme="teal">Geri Al</Button>
    </HStack>
  );
}
