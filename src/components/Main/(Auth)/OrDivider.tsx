import { Box } from "@chakra-ui/react";
import React from "react";

function OrDivider() {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={"15px"}>
        <Box as={"hr"} w={"50px"} h={0} color={"inherit"} borderTop={"1px"} />
        ya da
        <Box as={"hr"} w={"50px"} h={0} color={"inherit"} borderTop={"1px"} />
      </Box>
    </>
  );
}

export default OrDivider;
