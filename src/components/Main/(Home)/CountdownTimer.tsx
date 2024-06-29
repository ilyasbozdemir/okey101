"use client";

import { Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
  message: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  message,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleClick = () => {
    const simpleSliderElement = document.getElementById("SimpleSlider");
    if (simpleSliderElement) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      };
      simpleSliderElement.scrollIntoView(scrollOptions);
    }
  };

  useEffect(() => {
    const countdownDate = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      width="100%"
      borderRadius="10px"
      direction={{ base: "column", md: "row" }}
      w="100%"
      p={3}
      color="white"
      bg="black"
      gap={2}
    >
      <Flex justifyContent="center" mb={{ base: 2, md: 0 }}>
        <Text textAlign="center" fontWeight="semibold">
          {message}
        </Text>
      </Flex>

      <Flex direction="row" justifyContent="center" gap={2} mb={{ base: 2, md: 0 }}>
        <VStack spacing={-1}>
          <Text fontWeight="semibold">{timeLeft.days}</Text>
          <Text color="gray.400">GÜN</Text>
        </VStack>
        <VStack spacing={-1}>
          <Text fontWeight="semibold">{timeLeft.hours}</Text>
          <Text color="gray.400">SAAT</Text>
        </VStack>
        <VStack spacing={-1}>
          <Text fontWeight="semibold">{timeLeft.minutes}</Text>
          <Text color="gray.400">DAK</Text>
        </VStack>
        <VStack spacing={-1}>
          <Text fontWeight="semibold">{timeLeft.seconds}</Text>
          <Text color="gray.400">SN</Text>
        </VStack>
      </Flex>

      <Stack>
        <Button
          colorScheme="blue"
          onClick={handleClick}
        >
          Şimdi Alışveriş Yap!
        </Button>
      </Stack>
    </Flex>
  );
};

export default CountdownTimer;
