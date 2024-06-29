import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import NextImage from "next/image";
import { SidebarProps } from "interfaces/SidebarProps";
import { adminMenuItems, adminBasePath } from "constants/menuItems";
import NavigationMenu from "./NavigationMenu";

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

  return (
    <Drawer isOpen={sidebarOpen} placement="left" onClose={() => setSidebarOpen(false)} size="xs">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Box className="flex flex-col">
              <Box p={4}>
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
                <InputGroup>
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
                  <NavigationMenu items={adminMenuItems} isCollapsed={false} />
                </Box>
              </nav>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileSidebar;
