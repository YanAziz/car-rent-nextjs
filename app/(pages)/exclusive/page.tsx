import React from "react";
import ProductExclusiveCard from "@/components/ProductExclusiveCard";
import { carData } from "@/constants/CarData";

const Exclusive = () => {
  return (
    <main className="py-24 px-8">
      <div className="flex flex-col">
        <h1 className="text-2xl text-white font-bold">
          Pilihan mobil eksklusif
        </h1>
        <p className="text-gray-500">
          Ingin merasakan sensasi mengendarai mobil eksklusif?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {carData
          .filter((car) =>
            ["BMW", "Mercedes-Benz", "Porsche", "Lamborghini"].includes(
              car.name
            )
          )
          .map((car) => (
            <div key={car.name}>
              <ProductExclusiveCard
                {...car}
                image={car.image.src}
                description={car.description ?? ""}
              />
            </div>
          ))}
      </div>
    </main>
  );
};

export default Exclusive;
