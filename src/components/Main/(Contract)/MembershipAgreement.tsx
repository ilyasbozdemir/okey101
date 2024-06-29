import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

const MembershipAgreement: React.FC = () => {
  return (
    <Flex direction="column" maxW="1000px" mx="auto" p={6} fontFamily={'Montserrat'}>
      <Heading as="h1" mb={4} textAlign="center">
        Üyelik Sözleşmesi
      </Heading>
      <Text mb={4}>
      {'Bu sözleşme, [Şirket Adı] ("Şirket") ile [Üye Adı] ("Üye") arasında [Sözleşmenin Yapıldığı Tarih] tarihinde aşağıdaki şartlar dahilinde imzalanmıştır:'}
      </Text>
      <Text mb={4}>
        <strong>1. Taraflar</strong>
        <br />
        Şirket: [Şirket Adı], [Adres], [Vergi Numarası]
        <br />
        Üye: [Üye Adı], [Adres]
      </Text>
      <Text mb={4}>
        <strong>2. Sözleşmenin Konusu</strong>
        <br />
       {"Üye, Şirket'in belirlediği hizmetlere ve avantajlara erişim sağlamak için üyelik talebinde bulunur."}
      </Text>
      <Text mb={4}>
        <strong>3. Üyelik Şartları ve Ücretlendirme</strong>
        <br />
        - Üyelik süresi [Üyelik Süresi] şeklinde belirlenir.
        <br />
        - Üyelik bedeli [Üyelik Bedeli] tutarındadır ve [Ödeme Koşulları] şeklinde gerçekleştirilir.
      </Text>
      <Text mb={4}>
        <strong>4. Üyelik Hakları ve Sorumlulukları</strong>
        <br />
      {"- Üye, üyelik avantajlarından yararlanırken Şirket'in belirlediği kurallara uymayı kabul eder."}
        <br />
       {"- Üye, üyelik süresi boyunca Şirket'in sağladığı hizmetlerden yararlanabilir."}
      </Text>
      <Text mb={4}>
        <strong>5. İptal ve İade</strong>
        <br />
        - Üye, üyelik süresi sona ermeden önce iptal talebinde bulunabilir.
        <br />
       {"- Üyelik iptali durumunda, ödeme iadesi Şirket'in belirlediği prosedürlere göre yapılır."}
      </Text>
      <Text mb={4}>
        <strong>6. Kişisel Verilerin Korunması</strong>
        <br />
        {"- Üye'nin kişisel verileri, Şirket'in gizlilik politikası gereğince korunur ve kullanılır."}
      </Text>
    </Flex>
  )
}

export default MembershipAgreement
