import { BannerImage } from "@/constants/ImageData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <Image
        src={BannerImage.image}
        alt="banner"
        width={1920}
        height={1080}
        className="w-full max-h-screen"
      />
      <div>
        <h1 className="absolute top-2/3 left-1/2 transform -translate-x-3/4 -translate-y-1/2 md:top-3/4 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-3xl font-medium text-white">
          Perjalanan yang mudah, perjalanan yang berkesan. Bersama dengan{" "}
          <span className="font-bold">EasyDrive</span> menjelajah dengan bebas.{" "}
          <br />
          <Link href="/car" className="underline">
            <span>
              Lets drive <ArrowRight className="inline animate-arrow-move" />
            </span>
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
