import { BannerImage } from "@/constants/ImageData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <Image
          src={BannerImage.image}
          alt="banner"
          width={1920}
          height={1080}
          className="w-full object-cover h-screen"
        />
        <h1 className="absolute bottom-24 md:bottom-36 lg:bottom-20 left-8 md:left-24 xl:left-44 xl:bottom-36 text-xl mr-4 md:mr-16 md:text-2xl lg:text-3xl text-zinc-100">
          Perjalanan yang mudah, perjalanan yang berkesan. Bersama dengan{" "}
          <span className="text-zinc-100 font-bold">EasyDrive</span> menjelajah
          dengan bebas. <br />
          <Link href="/car" className="underline">
            <span className="flex items-center text-zinc-100">
              Lets drive
              <ArrowRight className="ml-2 inline animate-arrow-move" />
            </span>
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
