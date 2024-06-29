'use client'

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  VStack,
  HStack,
  Heading,
  useToast,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepDescription,
  StepSeparator,
  Flex,
  Container,
  Stack,
  StepIcon,
  StepNumber,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useBreakpointValue } from "@chakra-ui/react"; // Import useBreakpointValue
import { adminBasePath } from "constants/menuItems";

// Step Components
const StoreInfoStep = ({
  storeName,
  setStoreName,
  storeLocation,
  setStoreLocation,
  setLogo,
}) => (
  <VStack spacing={4} align="stretch" width="100%" maxWidth="800px">
    <FormControl id="store-name" isRequired>
      <FormLabel>Mağaza Adı</FormLabel>
      <Input
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        placeholder="Mağaza Adı"
      />
    </FormControl>
    <FormControl id="store-location" isRequired>
      <FormLabel>Mağaza Konumu</FormLabel>
      <Input
        value={storeLocation}
        onChange={(e) => setStoreLocation(e.target.value)}
        placeholder="Mağaza Konumu"
      />
    </FormControl>
    <FormControl id="logo">
      <FormLabel>Mağaza Logosu</FormLabel>
      <Input type="file" onChange={(e) => setLogo(e.target.files[0])} />
    </FormControl>
  </VStack>
);

const SalesChannelsStep = ({
  webEnabled,
  setWebEnabled,
  socialMediaEnabled,
  setSocialMediaEnabled,
  physicalStoreEnabled,
  setPhysicalStoreEnabled,
}) => (
  <VStack spacing={4} align="stretch" width="100%" maxWidth="800px">
    <Checkbox
      isChecked={webEnabled}
      onChange={(e) => setWebEnabled(e.target.checked)}
    >
      Web Satışlarını Etkinleştir
    </Checkbox>
    <Checkbox
      isChecked={socialMediaEnabled}
      onChange={(e) => setSocialMediaEnabled(e.target.checked)}
    >
      Sosyal Medya Satışlarını Etkinleştir
    </Checkbox>
    <Checkbox
      isChecked={physicalStoreEnabled}
      onChange={(e) => setPhysicalStoreEnabled(e.target.checked)}
    >
      Fiziksel Mağaza Satışlarını Etkinleştir
    </Checkbox>
  </VStack>
);

const AdminInfoStep = ({
  adminUsername,
  setAdminUsername,
  adminEmail,
  setAdminEmail,
  adminPassword,
  setAdminPassword,
}) => (
  <VStack spacing={4} align="stretch" width="100%" maxWidth="800px">
    <FormControl id="admin-username" isRequired>
      <FormLabel>Admin Kullanıcı Adı</FormLabel>
      <Input
        value={adminUsername}
        onChange={(e) => setAdminUsername(e.target.value)}
        placeholder="Admin Kullanıcı Adı"
      />
    </FormControl>
    <FormControl id="admin-email" isRequired>
      <FormLabel>Admin Email</FormLabel>
      <Input
        type="email"
        value={adminEmail}
        onChange={(e) => setAdminEmail(e.target.value)}
        placeholder="Admin Email"
      />
    </FormControl>
    <FormControl id="admin-password" isRequired>
      <FormLabel>Admin Şifre</FormLabel>
      <Input
        type="password"
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
        placeholder="Admin Şifre"
      />
    </FormControl>
  </VStack>
);

const CompletionStep = ({ handleSubmit }) => (
  <Box textAlign="center" width="100%" maxWidth="800px">
    <Heading size="md" mb={4}>
      Kurulumu Tamamlayın
    </Heading>
    <Button colorScheme="blue" onClick={handleSubmit}>
      Kurulumu Tamamla
    </Button>
  </Box>
);

const SetupPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [logo, setLogo] = useState(null);
  const [webEnabled, setWebEnabled] = useState(false);
  const [socialMediaEnabled, setSocialMediaEnabled] = useState(false);
  const [physicalStoreEnabled, setPhysicalStoreEnabled] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handlePrev = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async () => {
    const response = await fetch("/api/setup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        storeName,
        storeLocation,
        logo,
        webEnabled,
        socialMediaEnabled,
        physicalStoreEnabled,
        adminUsername,
        adminEmail,
        adminPassword,
      }),
    });

    if (response.ok) {
      toast({
        title: "Kurulum Tamamlandı",
        description: "Mağazanız başarıyla kuruldu! Yönetim Paneline yönlendiriliyorsunuz",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push(adminBasePath);
    } else {
      toast({
        title: "Kurulum Hatası",
        description: "Bir hata oluştu, lütfen tekrar deneyin.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const steps = [
    {
      title: "Mağaza Bilgileri",
      description: "Mağazanızın temel bilgilerini girin",
      content: (
        <StoreInfoStep
          storeName={storeName}
          setStoreName={setStoreName}
          storeLocation={storeLocation}
          setStoreLocation={setStoreLocation}
          setLogo={setLogo}
        />
      ),
    },
    {
      title: "Satış Kanalları",
      description: "Satış kanallarını etkinleştirin",
      content: (
        <SalesChannelsStep
          webEnabled={webEnabled}
          setWebEnabled={setWebEnabled}
          socialMediaEnabled={socialMediaEnabled}
          setSocialMediaEnabled={setSocialMediaEnabled}
          physicalStoreEnabled={physicalStoreEnabled}
          setPhysicalStoreEnabled={setPhysicalStoreEnabled}
        />
      ),
    },
    {
      title: "Admin Bilgileri",
      description: "Admin bilgilerini girin",
      content: (
        <AdminInfoStep
          adminUsername={adminUsername}
          setAdminUsername={setAdminUsername}
          adminEmail={adminEmail}
          setAdminEmail={setAdminEmail}
          adminPassword={adminPassword}
          setAdminPassword={setAdminPassword}
        />
      ),
    },
    {
      title: "Tamamlama",
      description: "Kurulumu tamamlayın",
      content: <CompletionStep handleSubmit={handleSubmit} />,
    },
  ];

  const orientation = useBreakpointValue({
    base: "vertical",
    md: "horizontal",
  }) as "horizontal" | "vertical";

  if (!isMounted) return null;

  return (
    <Container maxW="container.lg" py={10}>
      <Heading my={5} textAlign={"center"} fontFamily="Montserrat">
        Mağaza Kurulumu
      </Heading>

      <Flex direction={"column"} align="start" justify="center" w={"full"}>
        <Stepper
          index={activeStep}
          orientation={orientation}
          size="lg"
          flexShrink={0}
          width={{ base: "100%", md: "30%" }}
          mb={{ base: 5, md: 10 }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <StepDescription>{step.description}</StepDescription>
              {index < steps.length - 1 && <StepSeparator />}
            </Step>
          ))}
        </Stepper>

        <Box mt={{ base: 6, md: 0 }} ml={{ md: 10 }} flex="1" width="100%" maxWidth="800px">
          <Stack spacing={4}>
            {steps[activeStep].content}
            <HStack justify="space-between">
              <Button
                onClick={handlePrev}
                isDisabled={activeStep === 0}
                variant={"outline"}
              >
                Geri
              </Button>
              <Button
                onClick={handleNext}
                isDisabled={activeStep === steps.length - 1}
                variant={"outline"}
              >
                İleri
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default SetupPage;
