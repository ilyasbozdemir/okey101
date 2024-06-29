// src/containers/Main/Home.tsx
import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Section {
  id: string;
  component: JSX.Element;
}

const sections: Section[] = [
  {
    id: "intro",
    component: (
      <Box textAlign="center" mt="50px">
        <Heading>Okey 101</Heading>
        <Text mt="4">Hoş geldiniz! Okey 101 oyununu oynamak için aşağıdaki butona tıklayın.</Text>
        <Link href="/game" passHref>
          <Button colorScheme="teal" size="lg" mt="8">
            Oyuna Başla
          </Button>
        </Link>
      </Box>
    ),
  },
  // Diğer bölümler buraya eklenebilir.
];

const HomeContainer: React.FC = () => {
  return (
    <Flex direction={"column"} gap={2}>
      {sections.map(({ id, component }) => (
        <section key={id} id={id}>
          {component}
        </section>
      ))}
    </Flex>
  );
};

export default HomeContainer;
