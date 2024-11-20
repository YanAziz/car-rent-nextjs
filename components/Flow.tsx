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
    <section className="text-white px-8 lg:px-20 pt-96 lg:pt-12">
      <div className="pb-10 pt-48 lg:pt-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src={FlowImage.image}
            alt="logo"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-xl lg:text-2xl font-semibold text-white text-center mb-2">
            Memesan dengan mudah
          </h2>
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800 transition-transform hover:-translate-y-1 w-full lg:w-96 mx-auto"
            >
              <CardContent className="p-3">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="size-4 lg:size-8 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle className="size-5 text-white" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-400">
                      Langkah {index + 1}
                    </span>
                    <p className="text-sm text-white">{step}</p>
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

{
  /* <h1 className="text-2xl font-bold">Tentang kami</h1>
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
          </p> */
}

export default Flow;
