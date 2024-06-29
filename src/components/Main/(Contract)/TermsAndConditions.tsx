import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

const TermsAndConditions: React.FC = () => {
  return (
    <Flex direction="column" maxW="1000px" mx="auto" p={6} fontFamily={'Montserrat'}>
      <Heading as="h1" mb={4} textAlign="center">
        Kullanım Koşulları
      </Heading>
      <Text mb={4}>
       {'Lütfen bu belgeyi dikkatlice okuyunuz. Bu, [Şirket Adı] ("Şirket") tarafından işletilen web sitesinin ve hizmetlerinin ("Hizmet") kullanım koşullarını belirlemektedir. Hizmetlerimizi kullanarak, bu koşulları kabul etmiş olursunuz.'}
      </Text>
      <Text mb={4}>
        <strong>1. Hizmet Kullanımı</strong>
        <br />
        - Hizmetlerimizi yalnızca yasal amaçlarla kullanabilirsiniz. Hizmetlerimizi kullanırken herhangi bir yasa dışı faaliyet yapmayacağınızı kabul edersiniz.
      </Text>
      <Text mb={4}>
        <strong>2. Gizlilik Politikası</strong>
        <br />
        - Hizmetlerimizin kullanımıyla ilgili gizlilik politikamızı kabul etmiş olursunuz. Daha fazla bilgi için lütfen gizlilik politikamızı okuyunuz.
      </Text>
      <Text mb={4}>
        <strong>3. Kullanıcı Hesapları</strong>
        <br />
        - Hizmetlerimizi kullanmak için bir hesap oluşturmanız gerekebilir. Hesap bilgilerinizin güvenliğinden siz sorumlusunuz.
      </Text>
      <Text mb={4}>
        <strong>4. İçerik</strong>
        <br />
        - Hizmetlerimizde sunulan içeriklerin doğruluğu ve güncelliği konusunda garanti veremeyiz. Hizmetlerimizi kullanırken dikkatli olmanızı öneririz.
      </Text>
      <Text mb={4}>
        <strong>5. Hizmet Değişiklikleri</strong>
        <br />
        - Şirket, Hizmetlerimizi değiştirme, askıya alma veya sonlandırma hakkını saklı tutar.
      </Text>
    </Flex>
  )
}

export default TermsAndConditions
