import ProductCardCar from "@/components/ProductCard";
import { carData } from "@/constants/CarData";
import React from "react";

const CarPage = () => {
  return (
    <main className="py-24 px-8">
      <div className="flex flex-col">
        <h1 className="text-2xl text-white font-bold">
          Kendaraan pilihan teratas bulan ini
        </h1>
        <p className="text-gray-500">
          Rasakan kendaraan terpopuler pada bulan ini
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
        {carData
          .filter(
            (car) =>
              !["BMW", "Mercedes-Benz", "Porsche", "Lamborghini"].includes(
                car.name
              )
          )
          .map((car) => (
            <div key={car.name}>
              <ProductCardCar {...car} image={car.image.src} />
            </div>
          ))}
      </div>
    </main>
  );
};

export default CarPage;
