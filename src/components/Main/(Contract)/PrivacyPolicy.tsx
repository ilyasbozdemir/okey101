import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <Flex direction="column" maxW="1000px" mx="auto" p={6} fontFamily={'Montserrat'}>
      <Heading as="h1" mb={4} textAlign="center">
        Gizlilik Politikası
      </Heading>
      <Text mb={4}>
       {' Bu gizlilik politikası, [Şirket Adı] ("Şirket") tarafından işletilen web sitesinin ve hizmetlerinin ("Hizmet") kullanıcılarına nasıl bilgi topladığını, kullandığını, paylaştığını ve işlediğini açıklar.'}
      </Text>
      <Text mb={4}>
        <strong>1. Toplanan Bilgiler</strong>
        <br />
        - Hizmetlerimizi kullanırken bize sağladığınız kişisel bilgiler, ad, e-posta adresi gibi bilgileri içerebilir.
      </Text>
      <Text mb={4}>
        <strong>2. Kullanılan Bilgiler</strong>
        <br />
        - Topladığımız bilgileri, Hizmetlerimizi sunmak, bakımını yapmak, kullanıcı deneyimini geliştirmek ve müşteri desteği sağlamak amacıyla kullanabiliriz.
      </Text>
      <Text mb={4}>
        <strong>3. Bilgilerin Paylaşılması</strong>
        <br />
        - Kişisel bilgileriniz, yasal yükümlülükleri yerine getirmek, Şirketimizi ve Hizmetlerimizi korumak ve uygulamak için gereken durumlarda yasal mercilere veya diğer şirketlere açıklanabilir.
      </Text>
      <Text mb={4}>
        <strong>4. Güvenlik</strong>
        <br />
        - Kişisel bilgilerinizi korumak için endüstri standardı güvenlik önlemlerini uyguluyoruz.
      </Text>
      <Text mb={4}>
        <strong>5. Çerezler</strong>
        <br />
        - Hizmetlerimizi kullanırken çerezler ve benzeri teknolojileri kullanabiliriz.
      </Text>
    </Flex>
  )
}

export default PrivacyPolicy
