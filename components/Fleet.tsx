import { FleetImage } from "@/constants/ImageData";
import Image from "next/image";
import React from "react";

const Fleet = () => {
  return (
    <section className="px-8">
      <div className="relative cursor-pointer">
        <Image
          src={FleetImage.image}
          alt="fleet"
          width={1920}
          height={1080}
          className="w-full object-cover rounded-lg h-[400px]"
        />
        <div className="absolute bottom-5 lg:bottom-10 left-5 lg:left-10">
          <span className="text-zinc-900 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            Armada terawat, <br />
            kepuasan pelanggan yang utama.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
