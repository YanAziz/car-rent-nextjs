import React from "react";
import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";

const Flow = () => {
  const steps = [
    "Pilih kendaraan yang sesuai dengan kebutuhan Anda.",
    "Isi formulir pemesanan atau hubungi kami.",
    "Pilih metode pembayaran.",
    "Ambil kendaraan di lokasi yang telah ditentukan atau minta antar ke tempat Anda.",
    "Nikmati perjalanan dengan EasyDrive.",
  ];
  return (
    <section className="cursor-pointer">
      <div className="px-8 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Alur memesan
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Rental mobil mudah dan cepat hanya dengan 5 langkah
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800 transition-transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-400">
                      Langkah {index + 1}
                    </span>
                    <p className="mt-1 text-sm text-white">{step}</p>
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
