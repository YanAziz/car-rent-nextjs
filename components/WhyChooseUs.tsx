import { Gauge, Headset, NotebookPen, Wallet } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="px-8 flex flex-col gap-8 py-16">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-zinc-100 font-bold">
        Kenapa harus pilih EasyDrive?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        <div className="flex flex-col justify-center items-center gap-4 bg-zinc-950 py-8 px-4 rounded-lg">
          <NotebookPen className="size-10 md:size-14 lg:size-20 text-zinc-900 bg-zinc-300 p-2 md:p-4 lg:p-6 rounded-lg" />
          <h2 className="text-zinc-100 text-sm md:text-base font-semibold">
            Proses penyewaan yang mudah
          </h2>
          <p className="text-zinc-300 text-sm md:text-base text-center">
            Dengan sistem pemesanan yang sederhana dan user-friendly, pelanggan
            dapat menyewa kendaraan hanya dalam beberapa klik tanpa ribet.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-zinc-950 py-8 px-4 rounded-lg">
          <Gauge className="size-10 md:size-14 lg:size-20 text-zinc-900 bg-zinc-300 p-2 md:p-4 lg:p-6 rounded-lg" />
          <h2 className="text-zinc-100 text-sm md:text-base font-semibold">
            Armada kendaraan terawat
          </h2>
          <p className="text-zinc-300 text-sm md:text-base text-center">
            Setiap kendaraan kami rutin menjalani perawatan dan pemeriksaan,
            sehingga pelanggan selalu mendapatkan kenyamanan dan keamanan
            maksimal saat berkendara.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-zinc-950 py-8 px-4 rounded-lg">
          <Wallet className="size-10 md:size-14 lg:size-20 text-zinc-900 bg-zinc-300 p-2 md:p-4 lg:p-6 rounded-lg" />
          <h2 className="text-zinc-100 text-sm md:text-base font-semibold">
            Harga transparan dan kompetitif
          </h2>
          <p className="text-zinc-300 text-sm md:text-base text-center">
            Kami menjamin harga yang tertera sudah mencakup semua biaya, tanpa
            tambahan tersembunyi, sekaligus menawarkan tarif yang bersaing di
            pasaran.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-zinc-950 py-8 px-4 rounded-lg">
          <Headset className="size-10 md:size-14 lg:size-20 text-zinc-900 bg-zinc-300 p-2 md:p-4 lg:p-6 rounded-lg" />
          <h2 className="text-zinc-100 text-sm md:text-base font-semibold">
            Layanan pelannggan 24/7
          </h2>
          <p className="text-zinc-300 text-sm md:text-base text-center">
            Tim dukungan kami siap melayani pertanyaan dan kebutuhan pelanggan
            kapan saja, memberikan rasa aman sepanjang waktu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
