"use client";

import React, { useEffect, useState } from "react";
import { Box, Flex, IconButton, Text, Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoHomeOutline,
  IoHomeSharp,
  IoCartOutline,
  IoCartSharp,
  IoHeartOutline,
  IoHeartSharp,
  IoPersonOutline,
  IoListOutline,
  IoListSharp,
} from "react-icons/io5";

const bottomNavigationItems = [
  {
    label: "Anasayfa",
    link: "/",
    icon: IoHomeOutline,
    filledIcon: IoHomeSharp,
  },
  {
    label: "Favorilerim",
    link: "/favorilerim",
    icon: IoHeartOutline,
    filledIcon: IoHeartSharp,
  },
  {
    label: "Sepetim",
    link: "/sepetim",
    icon: IoCartOutline,
    filledIcon: IoCartSharp,
  },
  {
    label: "Siparişlerim",
    link: "/siparislerim",
    icon: IoListOutline,
    filledIcon: IoListSharp,
  },
];

const BottomNavigation = ({
  isAuthenticated = true,
  user = {
    name: "John Doe",
    avatar: "https://bit.ly/dan-abramov",
  },
}) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? 200 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Box
        display={{ base: "flex", md: "none" }}
        bg="white"
        borderTop="1px solid #eaeaea"
        shadow="md"
        height="60px"
      >
        <Flex justify="space-between" align="center" height="100%" width="100%">
          {bottomNavigationItems.map((item, index) => {
            const IconComponent =
              pathname === item.link ? item.filledIcon : item.icon;

            return (
              <Link href={item.link} passHref key={index} style={{ flex: 1 }}>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  flex="1"
                  position="relative"
                >
                  <IconButton
                    variant="ghost"
                    aria-label={item.label}
                    icon={
                      <IconComponent
                        size={25}
                        color={pathname === item.link ? "black" : "gray"}
                      />
                    }
                    flexDirection="column"
                  />
                  <Text
                    fontSize="xs"
                    color={pathname === item.link ? "black" : "gray"}
                  >
                    {item.label}
                  </Text>
                </Flex>
              </Link>
            );
          })}

          <Link href="/hesabim" passHref style={{ flex: 1 }}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              flex="1"
              position="relative"
            >
              <IconButton
                variant="ghost"
                aria-label="Hesabım"
                icon={
                  isAuthenticated ? (
                    <Avatar size="sm" name={user.name} src={user.avatar} />
                  ) : (
                    <IoPersonOutline
                      size={25}
                      color={pathname === "/hesabim" ? "black" : "gray"}
                    />
                  )
                }
                flexDirection="column"
              />
              <Text
                fontSize="xs"
                color={pathname === "/hesabim" ? "black" : "gray"}
              >
                Hesabım
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default BottomNavigation;
