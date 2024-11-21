"use client";

import Footer from "@/components/Footer";
import ProductCardCar from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { carData } from "@/constants/CarData";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState } from "react";

const CarPage = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State untuk mengatur apakah semua kartu ditampilkan

  const handleToggle = () => {
    setIsExpanded((prev) => !prev); // Toggle antara Read More dan Read Less
  };

  // Tentukan jumlah kartu yang ditampilkan
  const visibleCount = isExpanded ? carData.length : 8;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-24 pb-12 px-8 flex-grow">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl text-white font-bold">
            Kendaraan terpopuler
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Rasakan kendaraan terpopuler pada bulan ini
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6 md:pt-8">
          {carData
            .filter(
              (car) =>
                !["BMW", "Mercedes-Benz", "Porsche", "Lamborghini"].includes(
                  car.name
                )
            )
            .slice(0, visibleCount) // Batasi jumlah kartu yang dirender
            .map((car) => (
              <div key={car.name}>
                <ProductCardCar {...car} image={car.image.src} />
              </div>
            ))}
        </div>

        {/* Tombol Read More / Read Less */}
        <div className="flex justify-center pt-12">
          <Button
            onClick={handleToggle}
            size="sm"
            className="bg-zinc-100 text-gray-900 py-2 px-4 rounded-lg hover:bg-zinc-300 font-semibold"
          >
            {isExpanded ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-900 tracking-tight md:tracking-normal">
                  Lihat lebih sedikit
                </span>
                <ArrowUp />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-gray-900 tracking-tight md:tracking-normal">
                  Lihat lebih banyak
                </span>
                <ArrowDown />
              </div>
            )}
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarPage;
