"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  VStack,
  Link as ChakraLink,
  Collapse,
  Text,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import { FaUser, FaTruck } from "react-icons/fa";
import { HamburgerIcon, SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Logo from "components/Logo";
import userMenuItems from "constants/userMenuItems";
import NextLink from "next/link";
import Link from "next/link";
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

// Mock auth state
const isAuthenticated = true;
const user = {
  name: "John Doe",
  avatar: "https://bit.ly/dan-abramov",
};

const cartItemCount = 1;

const DesktopNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleMenuToggle = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const userMenuLinks = [
    { label: "Profilim", link: "/profilim", isAuth: true },
    { label: "Siparişlerim", link: "/siparislerim", isAuth: true },
    { label: "Favorilerim", link: "/favorilerim", isAuth: true },
    { label: "Adreslerim", link: "/adreslerim", isAuth: true },
    { label: "Hesabım", link: "/hesabim", isAuth: true },
    { label: "Çıkış Yap", link: "/auth/cikis", isAuth: true },
    { label: "Giriş Yap", link: "/auth/giris-yap", isAuth: false },
    { label: "Kayıt Ol", link: "/auth/kayit-ol", isAuth: false },
  ];

  // Use useColorModeValue at the top level
  const bg = useColorModeValue("white", "gray.900");
  const menuListBg = useColorModeValue("white", "gray.800");
  const menuItemHoverBg = useColorModeValue("gray.200", "gray.600");
  const buttonHoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box bg={bg} px={4} shadow="md">
      {/* First Row */}
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={3} alignItems={"center"} fontFamily={"Montserrat"}>
          <Link href="/hakkimizda">
            <Text
              as={"span"}
              _hover={{
                color: "#696969",
              }}
            >
              Hakkımızda
            </Text>
          </Link>
          <Link href="/yardim">
            <Text
              as={"span"}
              _hover={{
                color: "#696969",
              }}
            >
              Yardım
            </Text>
          </Link>
          <Link href="/blog">
            <Text
              as={"span"}
              _hover={{
                color: "#696969",
              }}
            >
              Blog
            </Text>
          </Link>
        </Flex>
        <Flex alignItems={"center"}>
          <Link href="/kargo-takibi">
            <Text
              as={"span"}
              _hover={{
                color: "#696969",
              }}
              mr={4}
            >
              Kargo Takibi
            </Text>
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size="sm"
                name={isAuthenticated ? user.name : ""}
                src={isAuthenticated ? user.avatar : ""}
                bg={isAuthenticated ? "" : "gray.500"}
                icon={<AiOutlineUser fontSize="1.5rem" />}
              />
            </MenuButton>

            <MenuList bg={menuListBg}>
              {userMenuLinks
                .filter((item) =>
                  isAuthenticated ? item.isAuth : !item.isAuth
                )
                .map((item, index) => (
                  <Link href={item.link} key={index} passHref>
                    <MenuItem
                      _hover={{
                        bg: menuItemHoverBg,
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  </Link>
                ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/* Second Row */}
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          onClick={onMenuOpen}
          aria-label="Open Menu"
          variant="ghost"
          border="1px solid gray"
          borderColor="gray.300"
          _hover={{ bg: "gray.100" }}
        />

        <Box>
          <Link href="/" passHref>
            <Logo />
          </Link>
        </Box>

        <Flex alignItems="center">
          <IconButton
            size="md"
            icon={<SearchIcon />}
            aria-label="Search"
            onClick={onSearchOpen}
            variant="ghost"
            borderRadius="50%"
            border="1px solid gray"
            _hover={{ bg: "gray.100" }}
          />

          <Link href="/sepetim">
            <Button
              variant="outline"
              size="sm"
              ml={4}
              p={5}
              borderRadius="15px"
              borderColor="gray.300"
              bg="transparent"
              _hover={{ bg: "gray.100" }}
            >
              {cartItemCount > 0 ? (
                <RiShoppingCart2Fill color="gray.600" />
              ) : (
                <RiShoppingCart2Line color="gray.600" />
              )}
              <Badge ml={1} color="gray.600" borderRadius="full" px={2}>
                {cartItemCount}
              </Badge>
            </Button>
          </Link>
        </Flex>
      </Flex>

      {/* Third Row */}
      <Flex h={16} alignItems={"center"} justifyContent={"center"}>
        <HStack as={"nav"} spacing={4}>
          {userMenuItems.map((menuItem, index) => (
            <NextLink key={index} href={menuItem.link} passHref>
              <ChakraLink
                fontFamily="Montserrat"
                fontWeight="500"
                fontSize="md"
                _hover={{ color: "gray.500" }}
              >
                {menuItem.label}
              </ChakraLink>
            </NextLink>
          ))}
        </HStack>
      </Flex>

      {/* Search Modal */}
      <Modal isOpen={isSearchOpen} onClose={onSearchClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Arama</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Ürün, kategori veya marka ara..." />
              <Button colorScheme="gray" width="full">
                Ara
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Menu Modal */}
      <Modal isOpen={isMenuOpen} onClose={onMenuClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Kategoriler</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={4}>
              {userMenuItems.map((menuItem, index) => (
                <Box key={index} width="full">
                  <Button
                    onClick={() => handleMenuToggle(index)}
                    variant="ghost"
                    justifyContent="space-between"
                    rightIcon={
                      menuItem.submenu.length > 0 ? <ChevronRightIcon /> : null
                    }
                    width="full"
                    textAlign="left"
                    _hover={{ bg: buttonHoverBg }}
                  >
                    {menuItem.label}
                  </Button>
                  {menuItem.submenu.length > 0 && (
                    <Collapse in={openMenuIndex === index} animateOpacity>
                      <VStack pl={4} align="start" spacing={2} mt={2}>
                        {menuItem.submenu.map((subItem, subIndex) => (
                          <NextLink href={subItem.link} key={subIndex} passHref>
                            <ChakraLink width="full">
                              <Button
                                as="div"
                                variant="ghost"
                                justifyContent="flex-start"
                                width="full"
                                textAlign="left"
                                _hover={{
                                  bg: buttonHoverBg,
                                }}
                              >
                                {subItem.label}
                              </Button>
                            </ChakraLink>
                          </NextLink>
                        ))}
                      </VStack>
                    </Collapse>
                  )}
                </Box>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DesktopNavbar;
