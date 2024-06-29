"use client";

import React, { useRef, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import SSSProps from "../../../interfaces/SSSProps";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

function SSS({ faqs }: SSSProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef<HTMLInputElement>(null);
  const [nameSurname, setNameSurname] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const toast = useToast();

  return (
    <Box my={10}>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Text
            fontFamily="Montserrat"
            fontSize={{ base: 20, md: 22, lg: 24, xl: 26 }}
            textTransform="uppercase"
            color={"#686868"}
          >
            Sıkça Sorulan Sorular
          </Text>
        </Flex>
      </Center>

      <Flex align={"center"} justify={"center"} my={18}>
        <Container maxW={"7xl"}>
          <Accordion
            width="100%"
            maxW="full"
            rounded="lg"
            allowToggle
            fontSize={25}
            bg={'#fff'}
          >
            {faqs.map((s, index) => (
              <AccordionItem key={index} my={2} fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          fontFamily={"Montserrat"}
                          flex="1"
                          color={"#525252"}
                          textAlign="left"
                          fontWeight={'semibold'}
                        >
                          {s.Question}
                        </Box>
                        {isExpanded ? (
                          <IoMdArrowDropdown fontSize="16px" />
                        ) : (
                          <IoMdArrowDropright fontSize="16px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      fontFamily={"Montserrat"}
                      fontSize={"16px"}
                      color={"#686868"}
                      py={4}
                      px={6}
                    >
                      {s.Answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bağlantıda Kalalım</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="small">
              Bir Saatte ile ilgili tüm sorularınız için bizlere
              ulaşabilirsiniz. Bu sayfadaki soru cevap kısmını incelemenizi de
              öneririz.
            </Text>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={nameSurname}
                  onChange={(e) => {
                    setNameSurname(e.target.value);
                  }}
                  ref={initialRef}
                  placeholder="İsim Soyisim"
                />
              </InputGroup>
            </FormControl>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  placeholder="Email Adresiniz"
                />
              </InputGroup>
            </FormControl>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Mesajınız"
                />
              </InputGroup>
            </FormControl>
            <Flex justify={"center"}>
              <Button
                bg={"primary.100"}
                _hover={{ bg: "primary.200" }}
                color={"white"}
                w={"full"}
                onClick={() =>
                  toast({
                    title: "Meajınız Başarıyla Alındı!",
                    description: "En kısa sürede dönüş yapacağız",
                    status: "success",
                    position: "top",
                    duration: 2500,
                    isClosable: true,
                  })
                }
              >
                Gönder
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SSS;
