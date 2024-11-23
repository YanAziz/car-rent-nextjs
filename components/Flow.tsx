import { FlowImage } from "@/constants/ImageData";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";

const Flow = () => {
  const steps = [
    "Pilih kendaraan.",
    "Hubungi kami.",
    "Bayar dan jemput kendaraan.",
  ];
  return (
    <section className="text-zinc-100 px-8 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
        <div className="flex justify-center">
          <Image
            src={FlowImage.image}
            alt="logo"
            width={1920}
            height={1080}
            className="w-full object-cover pt-0 md:pt-4 lg:pt-0"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-100 text-center mb-2">
            Memesan dengan mudah
          </h2>
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800 transition-transform hover:-translate-y-1 w-full lg:w-96 mx-auto"
            >
              <CardContent className="p-3">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="size-4 lg:size-8 rounded-full bg-zinc-800 flex items-center justify-center">
                      <CheckCircle className="size-5 text-zinc-100" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xs md:text-sm lg:text-base text-zinc-400">
                      Langkah {index + 1}
                    </span>
                    <p className="text-xs md:text-sm lg:text-base text-zinc-100">
                      {step}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;
