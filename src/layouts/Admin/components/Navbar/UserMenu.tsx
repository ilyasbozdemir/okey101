import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  VStack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const UserMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        variant="ghost"
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
      >
        <Avatar
          size="sm"
          src={"https://avatars.githubusercontent.com/u/52322835?s=96&v=4"}
        />
      </MenuButton>
      <MenuList
        zIndex={5}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        boxShadow="lg"
      >
        <Link href="/dashboard/profilim" passHref>
          <MenuItem as="a">
            <VStack justify="start" alignItems="left" spacing={1}>
              <Text fontWeight="500">İlyas Bozdemir</Text>
              <Text size="sm" color="gray.500">
                @ilyasbozdemir
              </Text>
            </VStack>
          </MenuItem>
        </Link>
        <Link href="/logout" passHref>
          <MenuItem as="a">Çıkış Yap</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
