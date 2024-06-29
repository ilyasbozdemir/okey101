import { MenuItem } from "../types/MenuItem";
import {
  FiHome,
  FiBox,
  FiUser,
  FiShoppingCart,
  FiBarChart2,
  FiSettings,
  FiDollarSign,
  FiFileText,
  FiGlobe,
  FiPieChart,
  FiBriefcase,
  FiPackage,
  FiLifeBuoy,
  FiCalendar,
  FiUserCheck,
} from "react-icons/fi";
import { PiStorefrontBold } from "react-icons/pi";

export const adminBasePath = `/panel`;

export const adminMenuItems: MenuItem[] = [
  {
    type: "link",
    logoSrc: <FiHome />,
    title: "Ana Sayfa",
    href: `${adminBasePath}`,
  },
  {
    type: "group",
    logoSrc: <FiBox />,
    title: "Katalog",
    children: [
      {
        type: "link",
        title: "Ürünler",
        href: `${adminBasePath}/katalog/urunler`,
      },
      {
        type: "link",
        title: "Yeni Ürün Ekle",
        href: `${adminBasePath}/katalog/urunler/yeni`,
      },
      {
        type: "link",
        title: "Kategoriler",
        href: `${adminBasePath}/katalog/kategoriler`,
      },
      {
        type: "link",
        title: "Ürün Etiketleri",
        href: `${adminBasePath}/katalog/urun-etiketleri`,
      },
      {
        type: "link",
        title: "Fiyat Yönetimi",
        href: `${adminBasePath}/katalog/fiyat-yonetimi`,
      },
      {
        type: "link",
        title: "Markalar",
        href: `${adminBasePath}/katalog/markalar`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiShoppingCart />,
    title: "Siparişler",
    children: [
      {
        type: "link",
        title: "Tüm Siparişler",
        href: `${adminBasePath}/siparisler`,
      },
      {
        type: "link",
        title: "Yeni Sipariş",
        href: `${adminBasePath}/siparisler/yeni`,
      },
      {
        type: "link",
        title: "İade Talepleri",
        href: `${adminBasePath}/siparisler/iade`,
      },
      {
        type: "link",
        title: "Teslimatlar",
        href: `${adminBasePath}/siparisler/teslimatlar`,
      },
      {
        type: "link",
        title: "Sipariş Durumları",
        href: `${adminBasePath}/siparisler/durumlar`,
      },
      {
        type: "link",
        title: "Sosyal Medya Siparişleri",
        href: `${adminBasePath}/siparisler/sosyal-medya`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiUser />,
    title: "Müşteriler",
    children: [
      {
        type: "link",
        title: "Tüm Müşteriler",
        href: `${adminBasePath}/musteriler`,
      },
      {
        type: "link",
        title: "Yeni Müşteri Ekle",
        href: `${adminBasePath}/musteriler/yeni`,
      },
      {
        type: "link",
        title: "Müşteri Grupları",
        href: `${adminBasePath}/musteriler/gruplar`,
      },
      {
        type: "link",
        title: "Müşteri Yorumları",
        href: `${adminBasePath}/musteriler/yorumlar`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <PiStorefrontBold />,
    title: "Fiziksel Mağaza",
    children: [
      {
        type: "link",
        title: "Mağaza Yönetimi",
        href: `${adminBasePath}/fiziksel-magaza/magaza-yonetimi`,
      },
      {
        type: "link",
        title: "Hızlı Satış",
        href: `${adminBasePath}/fiziksel-magaza/hizli-satis`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiBarChart2 />,
    title: "Raporlar",
    children: [
      {
        type: "link",
        title: "Satış Raporları",
        href: `${adminBasePath}/raporlar/satis`,
      },
      {
        type: "link",
        title: "Müşteri Raporları",
        href: `${adminBasePath}/raporlar/musteri`,
      },
      {
        type: "link",
        title: "Stok Raporları",
        href: `${adminBasePath}/raporlar/stok`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiBriefcase />,
    title: "İçerik Yönetimi",
    children: [
      {
        type: "link",
        title: "Blog Yönetimi",
        href: `${adminBasePath}/icerik/blog`,
      },
      {
        type: "link",
        title: "Sayfalar",
        href: `${adminBasePath}/icerik/sayfalar`,
      },
      {
        type: "link",
        title: "SSS Yönetimi",
        href: `${adminBasePath}/icerik/sss`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiPackage />,
    title: "Kargo Yönetimi",
    children: [
      {
        type: "link",
        title: "Kargo Firmaları",
        href: `${adminBasePath}/kargo/firmalar`,
      },
      {
        type: "link",
        title: "Gönderi Takibi",
        href: `${adminBasePath}/kargo/gonderi-takibi`,
      },
      {
        type: "link",
        title: "Kargo Ücretleri",
        href: `${adminBasePath}/kargo/ucretler`,
      },
      {
        type: "link",
        title: "Kargo Durumları",
        href: `${adminBasePath}/kargo/durumlar`,
      },
      {
        type: "link",
        title: "Kargo Raporları",
        href: `${adminBasePath}/kargo/raporlar`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiGlobe />,
    title: "SEO Yönetimi",
    children: [
      {
        type: "link",
        title: "Meta Etiketler",
        href: `${adminBasePath}/seo/meta-etiketler`,
      },
      {
        type: "link",
        title: "URL Yönetimi",
        href: `${adminBasePath}/seo/url-yonetimi`,
      },
      {
        type: "link",
        title: "Yeniden Yönlendirmeler",
        href: `${adminBasePath}/seo/yonlendirmeler`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiPieChart />,
    title: "Analizler",
    children: [
      {
        type: "link",
        title: "Satış Analizleri",
        href: `${adminBasePath}/analizler/satis`,
      },
      {
        type: "link",
        title: "Müşteri Analizleri",
        href: `${adminBasePath}/analizler/musteri`,
      },
      {
        type: "link",
        title: "Ürün Performansı",
        href: `${adminBasePath}/analizler/urun-performansi`,
      },
      {
        type: "link",
        title: "Pazarlama Raporları",
        href: `${adminBasePath}/analizler/pazarlama`,
      },
      {
        type: "link",
        title: "İade Analizleri",
        href: `${adminBasePath}/analizler/iade`,
      },
      {
        type: "link",
        title: "Stok Analizleri",
        href: `${adminBasePath}/analizler/stok`,
      },
      {
        type: "link",
        title: "Kampanya Analizleri",
        href: `${adminBasePath}/analizler/kampanya`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiSettings />,
    title: "Ayarlar",
    children: [
      {
        type: "link",
        title: "Genel Ayarlar",
        href: `${adminBasePath}/ayarlar/genel`,
      },
      {
        type: "link",
        title: "Kullanıcı Yönetimi",
        href: `${adminBasePath}/ayarlar/kullanicilar`,
      },
      {
        type: "link",
        title: "Güvenlik",
        href: `${adminBasePath}/ayarlar/guvenlik`,
      },
      {
        type: "link",
        title: "Ödeme Yöntemleri",
        href: `${adminBasePath}/ayarlar/odeme-yontemleri`,
      },
      {
        type: "link",
        title: "Kargo Ayarları",
        href: `${adminBasePath}/ayarlar/kargo`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiDollarSign />,
    title: "Finans Yönetimi",
    children: [
      {
        type: "link",
        title: "Gelirler",
        href: `${adminBasePath}/finans/gelirler`,
      },
      {
        type: "link",
        title: "Giderler",
        href: `${adminBasePath}/finans/giderler`,
      },
      {
        type: "link",
        title: "Ödeme Yönetimi",
        href: `${adminBasePath}/finans/odeme-yonetimi`,
      },
      {
        type: "link",
        title: "Fatura Yönetimi",
        href: `${adminBasePath}/finans/fatura-yonetimi`,
      },
      {
        type: "link",
        title: "Finansal Raporlar",
        href: `${adminBasePath}/finans/raporlar`,
      },
      {
        type: "link",
        title: "Banka Hesapları",
        href: `${adminBasePath}/finans/banka-hesaplari`,
      },
    ],
  },  
  {
    type: "group",
    logoSrc: <FiFileText />,
    title: "Fatura Yönetimi",
    children: [
      {
        type: "link",
        title: "Tüm Faturalar",
        href: `${adminBasePath}/faturalar/tum-faturalar`,
      },
      {
        type: "link",
        title: "Yeni Fatura",
        href: `${adminBasePath}/faturalar/yeni`,
      },
      {
        type: "link",
        title: "Fatura Durumları",
        href: `${adminBasePath}/faturalar/durumlar`,
      },
      {
        type: "link",
        title: "Fatura Raporları",
        href: `${adminBasePath}/faturalar/raporlar`,
      },
      {
        type: "link",
        title: "Fatura Ayarları",
        href: `${adminBasePath}/faturalar/ayarlar`,
      },
    ],
  }
  ,
  {
    type: "group",
    logoSrc: <FiLifeBuoy />,
    title: "Yardım",
    children: [
      {
        type: "link",
        title: "SSS",
        href: `${adminBasePath}/yardim/sss`,
      },
      {
        type: "link",
        title: "İletişim",
        href: `${adminBasePath}/yardim/iletisim`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiCalendar />,
    title: "Kampanya Yönetimi",
    children: [
      {
        type: "link",
        title: "Tüm Kampanyalar",
        href: `${adminBasePath}/kampanyalar`,
      },
      {
        type: "link",
        title: "Yeni Kampanya",
        href: `${adminBasePath}/kampanyalar/yeni`,
      },
    ],
  },
  {
    type: "group",
    logoSrc: <FiUserCheck />,
    title: "Profil",
    children: [
      {
        type: "link",
        title: "Kişisel Bilgiler",
        href: `${adminBasePath}/profil/kisisel-bilgiler`,
      },
      {
        type: "link",
        title: "Şifre Değiştir",
        href: `${adminBasePath}/profil/sifre-degistir`,
      },
      {
        type: "link",
        title: "Bildirim Ayarları",
        href: `${adminBasePath}/profil/bildirim-ayarlari`,
      },
      {
        type: "link",
        title: "Gizlilik Ayarları",
        href: `${adminBasePath}/profil/gizlilik-ayarlari`,
      },
      {
        type: "link",
        title: "Bağlı Hesaplar",
        href: `${adminBasePath}/profil/bagli-hesaplar`,
      },
    ],
  },
];
