interface SubMenuItem {
  label: string;
  link: string;
  products: number[]; // Product IDs
}

interface MenuItem {
  label: string;
  link: string;
  submenu: SubMenuItem[];
}

const userMenuItems: MenuItem[] = [
  {
    label: 'Pantolonlar',
    link: '/pantolonlar',
    submenu: [
      { label: 'Kot Pantolonlar', link: '/pantolonlar/kot', products: [1] },
      { label: 'Kumaş Pantolonlar', link: '/pantolonlar/kumas', products: [2] },
      { label: 'Şortlar', link: '/pantolonlar/sortlar', products: [3] },
      { label: 'Eşofmanlar', link: '/pantolonlar/esofmanlar', products: [4] },
    ],
  },
  {
    label: 'Tişörtler',
    link: '/tisortler',
    submenu: [
      { label: 'Kısa Kollu Tişörtler', link: '/tisortler/kisa-kollu', products: [5] },
      { label: 'Uzun Kollu Tişörtler', link: '/tisortler/uzun-kollu', products: [6] },
      { label: 'Polo Tişörtler', link: '/tisortler/polo', products: [7] },
      { label: 'V Yaka Tişörtler', link: '/tisortler/v-yaka', products: [8] },
    ],
  },
  {
    label: 'Gömlekler',
    link: '/gomlekler',
    submenu: [
      { label: 'Klasik Gömlekler', link: '/gomlekler/klasik', products: [9] },
      { label: 'Günlük Gömlekler', link: '/gomlekler/gunluk', products: [10] },
      { label: 'Desenli Gömlekler', link: '/gomlekler/desenli', products: [11] },
      { label: 'Keten Gömlekler', link: '/gomlekler/keten', products: [12] },
    ],
  },
  {
    label: 'Ceketler',
    link: '/ceketler',
    submenu: [
      { label: 'Deri Ceketler', link: '/ceketler/deri', products: [13] },
      { label: 'Kot Ceketler', link: '/ceketler/kot', products: [14] },
      { label: 'Blazer Ceketler', link: '/ceketler/blazer', products: [15] },
      { label: 'Montlar', link: '/ceketler/montlar', products: [16] },
    ],
  },
  {
    label: 'Takım Elbiseler',
    link: '/takim-elbiseler',
    submenu: [
      { label: 'Klasik Takım Elbiseler', link: '/takim-elbiseler/klasik', products: [17] },
      { label: 'Slim Fit Takım Elbiseler', link: '/takim-elbiseler/slim-fit', products: [18] },
      { label: 'Damatlıklar', link: '/takim-elbiseler/damatlik', products: [19] },
      { label: 'Tek Ceketler', link: '/takim-elbiseler/tek-ceket', products: [20] },
    ],
  },
  {
    label: 'Aksesuarlar',
    link: '/aksesuarlar',
    submenu: [
      { label: 'Şapkalar', link: '/aksesuarlar/sapkalar', products: [21] },
      { label: 'Çantalar', link: '/aksesuarlar/cantalar', products: [22] },
      { label: 'Kemerler', link: '/aksesuarlar/kemerler', products: [23] },
      { label: 'Saatler', link: '/aksesuarlar/saatler', products: [24] },
    ],
  },
  {
    label: 'Ayakkabılar',
    link: '/ayakkabilar',
    submenu: [
      { label: 'Spor Ayakkabılar', link: '/ayakkabilar/spor-ayakkabilar', products: [25] },
      { label: 'Klasik Ayakkabılar', link: '/ayakkabilar/klasik-ayakkabilar', products: [26] },
      { label: 'Botlar', link: '/ayakkabilar/botlar', products: [27] },
      { label: 'Terlikler', link: '/ayakkabilar/terlikler', products: [28] },
    ],
  },
];

export default userMenuItems;
