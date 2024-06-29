// src/components/Main/(Game)/ControlButtons.tsx
import { Button, HStack } from '@chakra-ui/react';

export default function ControlButtons() {
  return (
    <HStack mt="4" justifyContent="center">
      <Button colorScheme="teal" variant={'outline'}>
        Taş Çek
      </Button>
      <Button colorScheme="teal" variant={'outline'}>
        Çift Aç
      </Button>
      <Button colorScheme="teal" variant={'outline'}>
        Seri Diz
      </Button>
      <Button colorScheme="teal" variant={'outline'}>
        Geri Al
      </Button>
    </HStack>
  );
}
