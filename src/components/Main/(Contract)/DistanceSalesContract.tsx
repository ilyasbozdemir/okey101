import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";

const DistanceSalesContract: React.FC = () => {
  return (
    <Flex
      direction="column"
      maxW="1000px"
      mx="auto"
      p={6}
      fontFamily={"Montserrat"}
    >
      <Heading as="h1" mb={4} textAlign="center">
        Mesafeli Satış Sözleşmesi
      </Heading>
      <Text mb={4}>
        {
          'Bu sözleşme, [Şirket Adı] ("Satıcı") ve [Alıcı Adı] ("Alıcı") arasında [Sözleşmenin Yapıldığı Tarih] tarihinde aşağıdaki şartlar dahilinde imzalanmıştır:'
        }
      </Text>
      <Text mb={4}>
        <strong>1. Taraflar</strong>
        <br />
        Satıcı: [Satıcı Şirket Adı], [Adres], [Vergi Numarası]
        <br />
        Alıcı: [Alıcı Adı], [Adres]
      </Text>
      <Text mb={4}>
        <strong>2. Sözleşmenin Konusu</strong>
        <br />
       {"Satıcı, Alıcı'ya aşağıdaki ürün/hizmeti satmayı taahhüt eder:"}
        [Ürün/Hizmet Açıklaması]
      </Text>
      <Text mb={4}>
        <strong>3. Fiyat</strong>
        <br />
        Alıcı, satın almayı kabul ettiği ürün/hizmet için [Fiyat] tutarında
        ödeme yapmayı taahhüt eder.
      </Text>
      <Text mb={4}>
        <strong>4. Teslimat ve Ödeme Koşulları</strong>
        <br />
        - Ürün/hizmetin teslimatı [Teslimat Koşulları] şeklinde olacaktır.
        <br />
        - Ödeme [Ödeme Koşulları] şeklinde gerçekleştirilecektir.
      </Text>
      <Text mb={4}>
        <strong>5. Cayma Hakkı</strong>
        <br />
        - Alıcı, ürün/hizmetin teslimatından itibaren 14 gün içerisinde cayma
        hakkını kullanabilir.
        <br />
        - Cayma hakkı süresi içerisinde kullanıldığında, ürün/hizmetin
        iadesi ve iade bedelinin ödenmesi sağlanacaktır.
      </Text>
      <Text mb={4}>
        <strong>6. İletişim Bilgileri</strong>
        <br />
        - Satıcı: Telefon: [Telefon Numarası], E-posta: [E-posta Adresi]
        <br />
        - Alıcı: Telefon: [Telefon Numarası], E-posta: [E-posta Adresi]
      </Text>
    </Flex>
  );
};

export default DistanceSalesContract;