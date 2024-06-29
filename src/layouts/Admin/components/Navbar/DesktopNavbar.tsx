import React from "react";
import { HStack, Button, Icon } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import Link from "next/link";
import NotificationMenu from "./NotificationMenu";
import UserMenu from "./UserMenu";

const DesktopNavbar: React.FC = () => {
  return (
    <HStack spacing={3} flex="1" justify="end" align="center" p={4}>
      <HStack spacing={3}>
        <Link href="/">
          <Button
            variant="ghost"
            leftIcon={<FiHome />}
            fontWeight="bold"
            fontSize="lg"
          />
        </Link>
        <NotificationMenu />
        <UserMenu />
      </HStack>
    </HStack>
  );
};

export default DesktopNavbar;
