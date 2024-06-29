"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

interface SubMenuItem {
  label: string;
  link: string;
  products: number[]; // Product IDs
  image: string; // Image URL
}

interface MenuItem {
  label: string;
  link: string;
  submenu: SubMenuItem[];
  image: string; // Image URL
}

const userMenuItems: MenuItem[] = [
  {
    label: "Pantolonlar",
    link: "/pantolonlar",
    image: "https://via.placeholder.com/1920x490/1d3557/fff?text=Pantolonlar",
    submenu: [
      {
        label: "Kot Pantolonlar",
        link: "/pantolonlar/kot",
        products: [1],
        image:
          "https://via.placeholder.com/400x250/457b9d/fff?text=Kot+Pantolonlar",
      },
      {
        label: "Kumaş Pantolonlar",
        link: "/pantolonlar/kumas",
        products: [2],
        image:
          "https://via.placeholder.com/400x250/a8dadc/fff?text=Kumaş+Pantolonlar",
      },
      {
        label: "Şortlar",
        link: "/pantolonlar/sortlar",
        products: [3],
        image: "https://via.placeholder.com/400x250/eb8c34/fff?text=Şortlar",
      },
      {
        label: "Eşofmanlar",
        link: "/pantolonlar/esofmanlar",
        products: [4],
        image: "https://via.placeholder.com/400x250/f1faee/fff?text=Eşofmanlar",
      },
    ],
  },
  {
    label: "Tişörtler",
    link: "/tisortler",
    image: "https://via.placeholder.com/1920x490/e63946/fff?text=Tişörtler",
    submenu: [
      {
        label: "Kısa Kollu Tişörtler",
        link: "/tisortler/kisa-kollu",
        products: [5],
        image:
          "https://via.placeholder.com/400x250/1d3557/fff?text=Kısa+Kollu+Tişörtler",
      },
      {
        label: "Uzun Kollu Tişörtler",
        link: "/tisortler/uzun-kollu",
        products: [6],
        image:
          "https://via.placeholder.com/400x250/457b9d/fff?text=Uzun+Kollu+Tişörtler",
      },
      {
        label: "Polo Tişörtler",
        link: "/tisortler/polo",
        products: [7],
        image:
          "https://via.placeholder.com/400x250/a8dadc/fff?text=Polo+Tişörtler",
      },
      {
        label: "V Yaka Tişörtler",
        link: "/tisortler/v-yaka",
        products: [8],
        image:
          "https://via.placeholder.com/400x250/eb8c34/fff?text=V+Yaka+Tişörtler",
      },
    ],
  },
  {
    label: "Gömlekler",
    link: "/gomlekler",
    image: "https://via.placeholder.com/1920x490/1d3557/fff?text=Gömlekler",
    submenu: [
      {
        label: "Klasik Gömlekler",
        link: "/gomlekler/klasik",
        products: [9],
        image:
          "https://via.placeholder.com/400x250/457b9d/fff?text=Klasik+Gömlekler",
      },
      {
        label: "Günlük Gömlekler",
        link: "/gomlekler/gunluk",
        products: [10],
        image:
          "https://via.placeholder.com/400x250/a8dadc/fff?text=Günlük+Gömlekler",
      },
      {
        label: "Desenli Gömlekler",
        link: "/gomlekler/desenli",
        products: [11],
        image:
          "https://via.placeholder.com/400x250/eb8c34/fff?text=Desenli+Gömlekler",
      },
      {
        label: "Keten Gömlekler",
        link: "/gomlekler/keten",
        products: [12],
        image:
          "https://via.placeholder.com/400x250/f1faee/fff?text=Keten+Gömlekler",
      },
    ],
  },
  {
    label: "Ceketler",
    link: "/ceketler",
    image: "https://via.placeholder.com/1920x490/e63946/fff?text=Ceketler",
    submenu: [
      {
        label: "Deri Ceketler",
        link: "/ceketler/deri",
        products: [13],
        image:
          "https://via.placeholder.com/400x250/1d3557/fff?text=Deri+Ceketler",
      },
      {
        label: "Kot Ceketler",
        link: "/ceketler/kot",
        products: [14],
        image:
          "https://via.placeholder.com/400x250/457b9d/fff?text=Kot+Ceketler",
      },
      {
        label: "Blazer Ceketler",
        link: "/ceketler/blazer",
        products: [15],
        image:
          "https://via.placeholder.com/400x250/a8dadc/fff?text=Blazer+Ceketler",
      },
      {
        label: "Montlar",
        link: "/ceketler/montlar",
        products: [16],
        image: "https://via.placeholder.com/400x250/eb8c34/fff?text=Montlar",
      },
    ],
  },
  {
    label: "Takım Elbiseler",
    link: "/takim-elbiseler",
    image:
      "https://via.placeholder.com/1920x490/1d3557/fff?text=Takım+Elbiseler",
    submenu: [
      {
        label: "Klasik Takım Elbiseler",
        link: "/takim-elbiseler/klasik",
        products: [17],
        image:
          "https://via.placeholder.com/400x250/457b9d/fff?text=Klasik+Takım+Elbiseler",
      },
      {
        label: "Slim Fit Takım Elbiseler",
        link: "/takim-elbiseler/slim-fit",
        products: [18],
        image:
          "https://via.placeholder.com/400x250/a8dadc/fff?text=Slim+Fit+Takım+Elbiseler",
      },
      {
        label: "Damatlıklar",
        link: "/takim-elbiseler/damatlik",
        products: [19],
        image:
          "https://via.placeholder.com/400x250/eb8c34/fff?text=Damatlıklar",
      },
      {
        label: "Tek Ceketler",
        link: "/takim-elbiseler/tek-ceket",
        products: [20],
        image:
          "https://via.placeholder.com/400x250/f1faee/fff?text=Tek+Ceketler",
      },
    ],
  },
  {
    label: "Aksesuarlar",
    link: "/aksesuarlar",
    image: "https://via.placeholder.com/1920x490/e63946/fff?text=Aksesuarlar",
    submenu: [
      {
        label: "Şapkalar",
        link: "/aksesuarlar/sapkalar",
        products: [21],
        image: "https://via.placeholder.com/400x250/1d3557/fff?text=Şapkalar",
      },
      {
        label: "Çantalar",
        link: "/aksesuarlar/cantalar",
        products: [22],
        image: "https://via.placeholder.com/400x250/457b9d/fff?text=Çantalar",
      },
      {
        label: "Kemerler",
        link: "/aksesuarlar/kemerler",
        products: [23],
        image: "https://via.placeholder.com/400x250/a8dadc/fff?text=Kemerler",
      },
      {
        label: "Saatler",
        link: "/aksesuarlar/saatler",
        products: [24],
        image: "https://via.placeholder.com/400x250/eb8c34/fff?text=Saatler",
      },
    ],
  },
  {
    label: "Ayakkabılar",
    link: "/ayakkabilar",
    image: "https://via.placeholder.com/1920x490/1d3557/fff?text=Ayakkabılar",
    submenu: [
      {
        label: "Spor Ayakkabılar",
        link: "/ayakkabilar/spor-ayakkabilar",
        products: [25],
        image:
          "https://via.placeholder.com/400x250/457b9d/fff?text=Spor+Ayakkabılar",
      },
      {
        label: "Klasik Ayakkabılar",
        link: "/ayakkabilar/klasik-ayakkabilar",
        products: [26],
        image:
          "https://via.placeholder.com/400x250/a8dadc/fff?text=Klasik+Ayakkabılar",
      },
      {
        label: "Botlar",
        link: "/ayakkabilar/botlar",
        products: [27],
        image: "https://via.placeholder.com/400x250/eb8c34/fff?text=Botlar",
      },
      {
        label: "Terlikler",
        link: "/ayakkabilar/terlikler",
        products: [28],
        image: "https://via.placeholder.com/400x250/f1faee/fff?text=Terlikler",
      },
    ],
  },
];

const Showcase = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return (
    <>
      <div className="w-full">
        {userMenuItems.map((category, index) => (
          <div key={index} className="mb-8">
            <Link href={category.link}>
              <span
                className="relative w-full h-96 mb-4 block"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                {/*

{category.label}

               */}
              </span>
            </Link>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 1fr)",
              }}
            >
              {category.submenu.map((subCategory, subIndex) => (
                <Link href={subCategory.link} key={subIndex}>
                  <span
                    className={`relative ${isTablet ? "h-64" : "h-48"} block`}
                    style={{
                      backgroundImage: `url(${subCategory.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontSize: "1.5rem",
                      textDecoration: "none",
                    }}
                  >
                    {/*

{subCategory.label}

               */}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Showcase;
