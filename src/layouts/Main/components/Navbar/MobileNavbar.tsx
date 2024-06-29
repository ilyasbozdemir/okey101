import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  useColorModeValue,
  Collapse,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Logo from "components/Logo";
import Link from "next/link";
import userMenuItems from "constants/userMenuItems";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();

  const [openMenu, setOpenMenu] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (index: number) => {
    setOpenMenu((prevOpenMenu) => ({
      ...prevOpenMenu,
      [index]: !prevOpenMenu[index],
    }));
  };

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
      setIsScrolled(scrollY > 0);
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);



  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: isScrolled ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Box bg={useColorModeValue("white", "gray.800")} px={4} shadow="md">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={onOpen}
            variant={"ghost"}
          />
          <Box>
            <Link href="/" passHref>
              <Logo />
            </Link>
          </Box>
          <IconButton
            size={"md"}
            icon={<SearchIcon />}
            aria-label={"Search"}
            display={{ md: "none" }}
            onClick={onSearchOpen}
            variant={"ghost"}
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menü</DrawerHeader>
              <DrawerBody>
                <Stack as={"nav"} spacing={4}>
                  {userMenuItems.map((menuItem, index) => (
                    <Box key={index}>
                      <Button
                        onClick={() => handleToggle(index)}
                        rightIcon={
                          menuItem.submenu.length > 0 ? (
                            <ChevronRightIcon />
                          ) : undefined
                        }
                        justifyContent="space-between"
                        width="100%"
                      >
                        {menuItem.label}
                      </Button>
                      {menuItem.submenu.length > 0 && (
                        <Collapse in={openMenu[index]}>
                          <Stack pl={4} mt={2} spacing={2}>
                            {menuItem.submenu.map((subItem, subIndex) => (
                              <Link href={subItem.link} passHref key={subIndex}>
                                <Button
                                  variant="ghost"
                                  justifyContent="flex-start"
                                  width="100%"
                                  onClick={onClose}
                                >
                                  {subItem.label}
                                </Button>
                              </Link>
                            ))}
                          </Stack>
                        </Collapse>
                      )}
                    </Box>
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>

      <Modal isOpen={isSearchOpen} onClose={onSearchClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Arama</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Arama yapın..." />
          </ModalBody>
        </ModalContent>
      </Modal>
    </motion.div>
  );
};

export default MobileNavbar;
