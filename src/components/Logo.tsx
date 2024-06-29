import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Logo() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="4"
      boxShadow="md"
    >
      <Text fontFamily="Montserrat" fontSize="24px" fontWeight="bold">
        rsrichsoul.com
      </Text>
    </Box>
  );
}

export default Logo;
