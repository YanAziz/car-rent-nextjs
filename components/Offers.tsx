import { carData } from "@/constants/CarData";
import React from "react";
import ProductOfferCard from "./ProductOfferCard";

const Offers = () => {
  return (
    <section>
      <div className="flex flex-col p-8">
        <h1 className="text-xl md:text-2xl text-white font-bold">
          Yakin lewatkan promo ini?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 md:pt-6">
          {carData
            .filter((car) =>
              ["Toyota Alphard", "Toyota Fortuner", "Toyota Zenix"].includes(
                car.name
              )
            )
            .map((car) => (
              <div key={car.name}>
                <ProductOfferCard
                  {...car}
                  image={car.image.src}
                  discount={car.discount ?? ""}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
