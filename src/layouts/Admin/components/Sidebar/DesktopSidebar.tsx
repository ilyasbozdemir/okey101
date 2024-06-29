import React, { useState } from "react";
import Link from "next/link";
import { Box, Flex, Icon, useColorModeValue, Input, InputGroup, InputLeftElement, Text, Button } from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";
import NextImage from "next/image";
import { SidebarProps } from "interfaces/SidebarProps";
import { adminBasePath, adminMenuItems } from "constants/menuItems";
import NavigationMenu from "./NavigationMenu";

const DesktopSidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      as={"aside"}
      bg={useColorModeValue("white", "gray.900")}
      shadow={"md"}
      className={`h-full fixed left-0 top-0 z-9999 flex flex-col overflow-y-hidden duration-300 ease-linear ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      borderRight={"1px"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      height="100vh"
      display={{ base: "none", md: "flex" }}
    >
      <Box className="flex justify-between items-center px-6 py-5.5 lg:py-6.5">
        <Box pt={"10px"}>
          <Link href={adminBasePath}>
            <NextImage
              width={isCollapsed ? 24 : 138}
              height={40}
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
        </Box>
        <Icon as={FiMenu} cursor="pointer" onClick={() => setIsCollapsed(!isCollapsed)} />
      </Box>

      <Box className="flex flex-col custom-scrollbar overflow-y-auto duration-350 ease-linear">
        <Box p={4} display={isCollapsed ? "none" : "block"}>
          <Flex alignItems="center" gap={2}>
            <NextImage
              style={{ borderRadius: "50%" }}
              width={40}
              height={40}
              src="/images/user.jpg"
              alt="User Image"
            />
            <Box>
              <Text fontWeight="bold">Alexander Pierce</Text>
            </Box>
          </Flex>
        </Box>
        <Box p={4}>
          <InputGroup display={isCollapsed ? "none" : "flex"}>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} />
            </InputLeftElement>
            <Input placeholder="Search" variant="filled" size="sm" borderRadius="md" />
          </InputGroup>
        </Box>
        <nav className="flex flex-col gap-10 mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <Box
            fontFamily={"Montserrat"}
            fontSize={{
              base: "sm",
              lg: "lg",
            }}
          >
            <NavigationMenu items={adminMenuItems} isCollapsed={isCollapsed} />
          </Box>
        </nav>
      </Box>
    </Box>
  );
};

export default DesktopSidebar;
