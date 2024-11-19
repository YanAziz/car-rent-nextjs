import { AboutImage } from "@/constants/ImageData";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="text-white px-8 lg:px-20 pt-96 lg:pt-0">
      <div className="pb-10 pt-48 lg:pt-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src={AboutImage.image}
            alt="logo"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Tentang kami</h1>
          <p className="italic tracking-wide">
            {'"'}EasyDrive adalah perusahaan rental mobil terpercaya yang
            berfokus pada memberikan pengalaman perjalanan yang nyaman, aman,
            dan mudah bagi semua pelanggan. Dengan jaringan luas, layanan
            pelanggan 24/7, serta pilihan kendaraan yang bervariasi, EasyDrive
            hadir untuk melayani kebutuhan perjalanan Anda - dari perjalanan
            bisnis hingga liburan keluarga. Kami percaya bahwa perjalanan Anda
            dimulai dengan kenyamanan dan transparansi. Oleh karena itu, kami
            berkomitmen untuk memberikan harga yang kompetitif, layanan
            berkualitas, dan kendaraan dalam kondisi terbaik. EasyDrive - solusi
            berkendara mudah Anda.{'"'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
