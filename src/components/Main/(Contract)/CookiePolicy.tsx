import React from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";

const CookiePolicyPage = () => {
  return (
    <Flex direction="column" maxW="1000px" mx="auto" p={6} fontFamily={'Montserrat'}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Çerez Politikası
      </Text>
      <Text fontSize="sm" mb={4}>
        Son güncellenme: {new Date().toLocaleDateString("tr-TR")}
      </Text>

      <Text mb={4}>
        Biz, Rsrichsoul, olarak güvenliğinize önem veriyor ve bu Çerez
        Politikası ile siz sevgili ziyaretçilerimizi, web sitemizde hangi
        çerezleri, hangi amaçla kullandığımız ve çerez ayarlarınızı nasıl
        değiştireceğiniz konularında kısaca bilgilendirmeyi hedefliyoruz.
      </Text>
      <Text mb={4}>
        Sizlere daha iyi hizmet verebilmek adına, çerezler vasıtasıyla, ne tür
        kişisel verilerinizin hangi amaçla toplandığı ve nasıl işlendiği
        konularında, kısaca bilgi sahibi olmak için lütfen bu Çerez Politikasını
        okuyunuz. Daha fazla bilgi için Gizlilik Politikamıza göz atabilir ya da
        bizlerle çekinmeden iletişime geçebilirsiniz.
      </Text>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Çerez Nedir?
      </Text>
      <Text mb={4}>
        Çerezler, kullanıcıların web sitelerini daha verimli bir şekilde
        kullanabilmeleri adına, cihazlarına kaydedilen küçük dosyacıklardır.
        Çerezler vasıtasıyla kullanıcıların bilgilerinin işleniyor olması
        sebebiyle, 6698 sayılı Kişisel Verilerin Korunması Kanunu gereğince,
        kullanıcıların bilgilendirilmeleri ve onaylarının alınması
        gerekmektedir.
      </Text>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Çerez Türleri
      </Text>
      <Text mb={4}>
        <b>1. Zorunlu Çerezler</b>: Web sitesine ilişkin temel işlevleri
        etkinleştirerek web sitesinin kullanılabilir hale gelmesini sağlayan
        çerezlerdir. Web sitesi bu çerezler olmadan düzgün çalışmaz.
      </Text>
      <Text mb={4}>
        <b>2. Performans Çerezleri</b>: Ziyaretçilerin web sitesine ilişkin
        kullanım bilgilerini ve tercihlerini anonim olarak toplayan ve bu sayede
        web sitesinin performansının geliştirilmesine olanak sağlayan
        çerezlerdir.
      </Text>
      <Text mb={4}>
        <b>3. Fonksiyonel Çerezler</b>: Kullanıcıların web sitesine ilişkin
        geçmiş kullanımlarından yola çıkılarak gelecekteki ziyaretlerinde
        tanınmalarını ve hatırlanmalarını sağlayan ve bu sayede web sitelerinin
        kullanıcılara dil, bölge vb. gibi kişiselleştirilmiş bir hizmet
        sunmasına olanak tanıyan çerezlerdir.
      </Text>
      <Text mb={4}>
        <b>4. Reklam Çerezleri</b>: Üçüncü taraflara ait çerezlerdir ve web
        sitelerinde ziyaretçilerin davranışlarını izlemek için kullanılırlar. Bu
        çerezlerin amaçları, ziyaretçilerin ihtiyaçlarına yönelik ilgilerini
        çekecek reklamların gösterilmesine yardımcı olmaktır ve sorumluluğu
        çerez sahibi üçüncü taraflara aittir.
      </Text>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Çerezler İle İşlenen Kişisel Veriler Nelerdir?
      </Text>
      <Text mb={4}>
        Kimlik (isim, soy isim, doğum tarihi vb.) ve iletişim (adres, e-posta
        adresi, telefon, IP, konum vb.) bilgileriniz tarafımızca, çerezler
        (cookies) vasıtasıyla, otomatik veya otomatik olmayan yöntemlerle ve
        bazen de analitik sağlayıcılar, reklam ağları, arama bilgi
        sağlayıcıları, teknoloji sağlayıcıları gibi üçüncü taraflardan elde
        edilerek, kaydedilerek, depolanarak ve güncellenerek, aramızdaki hizmet
        ve sözleşme ilişkisi çerçevesinde ve süresince, meşru menfaat işleme
        şartına dayanılarak işlenecektir.
      </Text>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Çerezler Hangi Amaçla Kullanılmaktadır?
      </Text>
      <Text mb={4}>
        Web sitemizde, şüpheli eylemlerin tespiti yoluyla güvenliğin sağlanması,
        kullanıcıların tercihleri doğrultusunda işlevsellik ve performansın
        artırılması, ürünlerin ve hizmetlerin geliştirilmesi ve
        kişiselleştirilmesi ile bu hizmetlere ulaşımın kolaylaştırılması,
        sözleşmesel ve hukuki sorumlulukların yerine getirilmesi amaçlı çerezler
        kullanmaktadır. Ayrıca kullanıcıların daha geniş kapsamlı hizmet
        sağlayıcılar ile buluşturulabilmesi amacıyla reklam çerezleri ve üçüncü
        taraflarla bilgi paylaşımı da söz konusudur.
      </Text>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Çerezler Nasıl Yönetilmektedir?
      </Text>
      <Text mb={4}>
        Tüm bu açıklamalardan sonra, hangi çerezlerin kullanılacağı konusu,
        tamamen kullanıcılarımızın özgür iradelerine bırakılmıştır. Çerez
        tercihlerinizi, tarayıcınızın ayarlarından silerek ya da engelleyerek,
        web sitemize adım attığınız anda yönetebilir ya da gelecekte,
        istediğiniz zaman bu ayarları değiştirebilirsiniz. Daha ayrıntılı bilgi
        için Gizlilik Politikamıza göz atabilir ya da bizlerle info@birsaatte.com
        e-mail adresi üzerinden iletişime geçebilirsiniz.
      </Text>
    </Flex>
  );
};

export default CookiePolicyPage;
