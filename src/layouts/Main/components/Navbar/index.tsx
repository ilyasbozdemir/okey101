"use client";

import React from "react";
import { useBreakpointValue, Box } from "@chakra-ui/react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import CountdownTimer from "components/Main/(Home)/CountdownTimer";
import { countdownData } from "mocks/data";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { targetDate, message } = countdownData;

  return (
    <Box>
 Navbar
      
    </Box>
  );
};

export default Navbar;
