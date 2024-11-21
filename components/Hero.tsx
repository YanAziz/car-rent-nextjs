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
        />{" "}
        <h1 className="absolute bottom-14 md:bottom-28 left-10 md:left-20 text-xl mr-2 md:mr-10 md:text-2xl lg:text-3xl font-medium text-white">
          Perjalanan yang mudah, perjalanan yang berkesan. Bersama dengan{" "}
          <span className="font-bold">EasyDrive</span> menjelajah dengan bebas.{" "}
          <br />
          <Link href="/car" className="underline">
            <span className="flex items-center">
              Lets drive <ArrowRight className="inline animate-arrow-move" />
            </span>
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
