"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialData } from "@/constants/TestimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section>
      <div className="flex flex-col pt-20 px-8 pb-12">
        <h1 className="text-xl lg:text-2xl text-zinc-100 font-bold">
          Apa kata mereka?
        </h1>
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {TestimonialData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <div className="pt-6">
                  <TestimonialCard
                    {...testimonial}
                    image={testimonial.image.src}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
