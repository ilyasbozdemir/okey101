import React from "react";
import { HStack, Icon, Stack } from "@chakra-ui/react";
import { FiMenu, FiHome } from "react-icons/fi";
import Link from "next/link";
import { SidebarProps } from "interfaces/SidebarProps";
import UserMenu from "./UserMenu";
import NotificationMenu from "./NotificationMenu";

const MobileNavbar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} p={4}>
      <HStack>
        <Icon
          cursor={"pointer"}
          as={FiMenu}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </HStack>

      <HStack spacing={3}>
        <Link href="/" target={"_blank"}>
          <Icon cursor={"pointer"} as={FiHome} />
        </Link>
        <NotificationMenu />
        <UserMenu />
      </HStack>
    </Stack>
  );
};

export default MobileNavbar;
