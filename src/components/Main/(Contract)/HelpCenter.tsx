"use client";

import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const studentFaqs: FAQ[] = [
  {
    question: "Kurs bulma",
    answer: "Nasıl bir kurs bulabilirim?",
  },
  {
    question: "Kursa kayıt",
    answer: "Bir kursa nasıl kaydolabilirim?",
  },
  {
    question: "İçeriğe erişim",
    answer: "Kurs içeriğine nasıl erişebilirim?",
  },
];

const instructorFaqs: FAQ[] = [
  {
    question: "Eğitmen olma",
    answer: "Nasıl bir eğitmen olabilirim?",
  },
  {
    question: "Kurs oluşturma",
    answer: "Kurs oluşturma süreci nasıl işler?",
  },
  {
    question: "İçerik hazırlama",
    answer: "Kurs içeriğini nasıl hazırlamalıyım?",
  },
];

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredStudentFaqs = studentFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredInstructorFaqs = instructorFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxW="container.lg" py={12}>
      <Heading
        as="h2"
        fontFamily={"Montserrat"}
        fontStyle={"normal"}
        fontWeight={"400"}
        fontSize={{
          base: "28px",
          md: "32px",
        }}
        lineHeight={"39px"}
        color={"#686868"}
        my={10}
        textAlign={"center"}
      >
        Yardım Merkezi
      </Heading>
      <Flex justifyContent={"center"}>
        <InputGroup mb={4} maxW="md">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Soruları ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </Flex>

      <Tabs variant="enclosed" align="center" colorScheme="orange">
        <TabList p={5} fontFamily={'Montserrat'} >
          <Tab fontSize={'lg'}>Öğrenci</Tab>
          <Tab fontSize={'lg'}>Eğitmen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Accordion allowToggle>
              {filteredStudentFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  border="1px"
                  borderRadius="lg"
                  borderColor="gray.200"
                  mb={4}
                >
                  <h2>
                    <AccordionButton _hover={{ bg: "gray.100" }}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>{faq.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
          <TabPanel>
            <Accordion allowToggle>
              {filteredInstructorFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  border="1px"
                  borderRadius="lg"
                  borderColor="gray.200"
                  mb={4}
                >
                  <h2>
                    <AccordionButton _hover={{ bg: "gray.100" }}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        <Text fontFamily={"Montserrat"}>{faq.question}</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>{faq.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default HelpCenter;
