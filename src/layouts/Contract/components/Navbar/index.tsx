import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "components/Logo";

function Navbar() {
  return (
    <Flex
      as={"header"}
      w={"100%"}
      justifyContent={"center"}
      bg={"#fff"}
      shadow={"md"}
    >
      <Flex
        alignItems="center"
        justifyContent={{ base: "center", lg: "space-between" }}
        w={{ base: "container.sm", lg: 1200 }}
        p={15}
        gap={5}
      >
        <Link href="/">
          <Logo />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
