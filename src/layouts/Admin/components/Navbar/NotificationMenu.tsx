import React, { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Icon, Box, VStack, Text } from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";

const NotificationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [
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

  const unreadNotificationsCount = notifications.filter((notification) => !notification.read).length;

  return (
    <Menu isLazy>
      <MenuButton
        cursor="pointer"
        boxSize={6}
        _hover={{ color: "orange.500" }}
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
      <MenuList zIndex={5} borderColor="gray.200" boxShadow="lg" minWidth="200px" display={isOpen ? "block" : "none"}>
        {notifications.map((notification) => (
          <MenuItem key={notification.id}>
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

export default NotificationMenu;
