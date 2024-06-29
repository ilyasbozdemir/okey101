import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rsrichsoul - Erkek Giyim',
    short_name: 'Rsrichsoul - Erkek Giyim',
    description: 'Rsrichsoul, şık ve kaliteli erkek giyim ürünleri sunan bir platformdur. Yeni gelenler, indirimdekiler ve popüler ürünlerimizi keşfedin.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}