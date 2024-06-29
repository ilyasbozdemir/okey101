// src/components/ControlButtons.tsx
import { Button, HStack } from '@chakra-ui/react';

export default function ControlButtons() {
  return (
    <HStack mt="4" justifyContent="center">
      <Button colorScheme="teal">
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
    </HStack>
  );
}
