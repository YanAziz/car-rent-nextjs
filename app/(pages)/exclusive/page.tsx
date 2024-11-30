"use client";

import React from "react";
import ProductExclusiveCard from "@/components/ProductExclusiveCard";
import { carData } from "@/constants/CarData";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ExclusivePage = () => {
  return (
    <>
      <main className="pt-24 pb-12 px-8">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-zinc-100 font-bold">
            Pilihan mobil eksklusif
          </h1>
          <p className="text-zinc-500 text-sm md:text-base lg:text-lg">
            Ingin merasakan sensasi mengendarai mobil eksklusif?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 md:pt-8">
          {carData
            .filter((car) =>
              ["BMW", "Mercedes-Benz", "Porsche", "Lamborghini"].includes(
                car.name
              )
            )
            .map((car) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <ProductExclusiveCard
                  {...car}
                  image={car.image.src}
                  description={car.description ?? ""}
                />
              </motion.div>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExclusivePage;
