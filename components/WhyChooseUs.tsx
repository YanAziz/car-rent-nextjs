"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import WhyChooseUsData from "@/constants/WhyChooseUsData";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="px-8 flex flex-col gap-8 py-16">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-zinc-100 font-bold">
        Kenapa harus pilih EasyDrive?
      </h1>
      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4"
      >
        {WhyChooseUsData.map((card, index) => (
          <motion.li
            key={card.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.75, delay: index * 0.5 }}
          >
            <WhyChooseUsCard
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
