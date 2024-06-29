"use client";

import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLock, FaShippingFast, FaThumbsUp, FaHeadset } from "react-icons/fa";

const Feature = ({ icon, title, text }) => {
  const iconBg = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("purple.500", "purple.300");
  
  return (
    <Stack align="center" spacing={3}>
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color={iconColor}
        rounded="full"
        bg={iconBg}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color="gray.600" textAlign="center">
        {text}
      </Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <Box p={4}>
      <Container maxW="7xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Feature
            icon={<Icon as={FaLock} w={10} h={10} />}
            title="Güvenli Ödeme"
            text="En güvenilir ve en popüler ödeme yöntemleri ile ödeme yapın."
          />
          <Feature
            icon={<Icon as={FaHeadset} w={10} h={10} />}
            title="7/24 Destek"
            text="Tüm öneri, soru ve şikayetleriniz için her zaman en kaliteli desteğe ulaşın."
          />
          <Feature
            icon={<Icon as={FaShippingFast} w={10} h={10} />}
            title="Hızlı ve Güvenli Kargo"
            text="Ayrıcalıklı ve hızlı bir kargo deneyimi ile ürünlerinize kolayca ulaşın."
          />
          <Feature
            icon={<Icon as={FaThumbsUp} w={10} h={10} />}
            title="Güvenli Alışveriş"
            text="Satın aldığınız andan teslim aldığınız ana kadar yüksek koruma ile yanınızdayız."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features;
