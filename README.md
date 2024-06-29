# Eğitim Platformu

Bu proje, çevrimiçi eğitim kursları sunan bir platformun temel yapısını içerir. Platform, farklı kullanıcılar için özelleştirilmiş içerikler sunar ve yöneticilerin kursları yönetmelerine olanak tanır.

## Özellikler

- Ana sayfa
- Kullanıcı oturum açma ve kayıt olma
- Kurs listesi ve detayları
- Kullanıcı profili
- Kurs ekleme, düzenleme ve silme (Yönetici paneli)
- Hata sayfaları

## Kurulum

1. Proje klasörünü kopyalayın.
2. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Backend için .NET Core 3.1 veya daha yeni sürümünü yükleyin ve çalıştırın.
4. Proje kök dizinindeki `.env.example` dosyasını `.env` olarak kopyalayın ve ayarlarınızı yapın.
5. Veritabanını oluşturmak için migration'ları çalıştırın: `dotnet ef database update`.
6. Proje'yi başlatmak için `npm run dev` komutunu çalıştırın.

## Kullanım

- Ana sayfa: http://localhost:3000/
- Kullanıcı oturum açma: http://localhost:3000/login
- Yönetici paneli: http://localhost:3000/admin
- Hata sayfaları: Örneğin, http://localhost:3000/404

## Katkılar

Katkılarınızı bekliyoruz! Büyük veya küçük, her türlü katkı değerlidir. Lütfen bir sorun açarak veya bir istek göndererek katkıda bulunun.

## Lisans

Bu proje Apache License 2.0 lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.
