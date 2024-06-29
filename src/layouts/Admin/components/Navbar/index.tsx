import React, { useState } from "react";
import {
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useColorModeValue,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiBell, FiMinimize, FiMaximize } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { SidebarProps } from "interfaces/SidebarProps";
interface Notification {
  id: number;
  title: string;
  content: string;
  time: string;
  read: boolean;
}

const Navbar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Flex
      boxShadow="sm"
      bg={"linear-gradient(135deg, #f0f0f0, #FFF5F5)"}
      border="0 solid #e5e7eb"
      justifyContent={{
        base: "space-between",
        md: "flex-end",
      }}
      shadow={sidebarOpen ? "none" : "md"}
      p={2}
      zIndex={15}
      width={sidebarOpen ? "calc(100% - 275px)" : "100%"}
      transform={sidebarOpen ? "translateX(275px)" : "translateX(0)"}
      transition="0.3s ease-in"
    >
      <HStack
        spacing={3}
        display={{
          base: "block",
          md: "none",
        }}
      >
        <Icon
          cursor={"pointer"}
          as={HiMenuAlt2}
          boxSize={6}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </HStack>

      <NavItem />
    </Flex>
  );
};

const NavItem: React.FC = () => {
  return (
    <HStack spacing={3} bg={"linear-gradient(135deg, #f0f0f0, #FFF5F5)"}>
      <NotificationMenu />

      <Menu isLazy>
        <MenuButton
          as={Button}
          size="sm"
          _hover={{ variant: "ghost" }}
          bg={"linear-gradient(135deg, #f0f0f0, #FFF5F5)"}
        >
          <Avatar
            size="sm"
            src={"https://avatars.githubusercontent.com/u/52322835?s=96&v=4"}
          />
        </MenuButton>
        <MenuList
          zIndex={5}
          border="2px solid"
          borderColor={useColorModeValue("gray.100", "gray.700")}
          boxShadow="4px 4px 0"
        >
          <Link href="/dashboard/profilim" passHref>
            <MenuItem>
              <VStack justify="start" alignItems="left">
                <Text fontWeight="500">İlyas Bozdemir</Text>
                <Text size="sm" color="gray.500" mt="0 !important">
                  @ilyasbozdemir
                </Text>
              </VStack>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </HStack>
  );
};

const NotificationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Yeni Ders Eklendi",
      content: "React ile ileri seviye web geliştirme dersine göz atın.",
      time: "10 dakika önce",
      read: false,
    },
    {
      id: 2,
      title: "Kullanıcı Yorumu",
      content: "Ali: Vue.js kursu gerçekten çok yararlı oldu, teşekkürler!",
      time: "2 saat önce",
      read: true,
    },
    {
      id: 3,
      title: "Etkinlik Hatırlatması",
      content: "Yarın saat 15:00'te canlı Q&A etkinliğini kaçırmayın!",
      time: "1 gün önce",
      read: false,
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { colorMode } = useColorMode();

  // Okunmamış bildirim sayısını hesapla
  const unreadNotificationsCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <Menu isLazy>
      <MenuButton
        cursor="pointer"
        boxSize={6}
        _hover={{ color: colorMode === "light" ? "orange.500" : "orange.300" }}
        onClick={handleToggle}
        position="relative"
      >
        <FiBell />
        {unreadNotificationsCount > 0 && (
          <Box
            as="span"
            position="absolute"
            top="-1px"
            right="-1px"
            width="2"
            height="2"
            bg="red.500"
            borderRadius="full"
          />
        )}
      </MenuButton>
      <MenuList
        zIndex={5}
        border="2px solid"
        borderColor="gray.200"
        boxShadow="4px 4px 0"
        minWidth="200px"
        display={isOpen ? "block" : "none"}
      >
        {notifications.map((notification, index) => (
          <MenuItem key={index}>
            <VStack spacing={2} align="start">
              <Text fontWeight="500">{notification.title}</Text>
              <Text color="gray.500">{notification.content}</Text>
            </VStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Navbar;
