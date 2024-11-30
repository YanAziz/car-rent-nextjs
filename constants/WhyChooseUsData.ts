import { Gauge, Headset, NotebookPen, Wallet } from "lucide-react";
import React from "react";

const WhyChooseUsData = [
  {
    id: 1,
    icon: React.createElement(NotebookPen, {
      className: "size-10 lg:size-14",
    }),
    title: "Proses penyewaan yang mudah",
    description:
      "Dengan sistem pemesanan yang sederhana dan user-friendly, pelanggan dapat menyewa kendaraan hanya dalam beberapa klik tanpa ribet.",
  },
  {
    id: 2,
    icon: React.createElement(Gauge, {
      className: "size-10 lg:size-14",
    }),
    title: "Armada kendaraan terawat",
    description:
      "Setiap kendaraan kami rutin menjalani perawatan dan pemeriksaan, sehingga pelanggan selalu mendapatkan kenyamanan dan keamanan maksimal saat berkendara.",
  },
  {
    id: 3,
    icon: React.createElement(Headset, {
      className: "size-10 lg:size-14",
    }),
    title: "Layanan pelanggan 24/7",
    description:
      "Tim dukungan kami siap melayani pertanyaan dan kebutuhan pelanggan kapan saja, memberikan rasa aman sepanjang waktu.",
  },
  {
    id: 4,
    icon: React.createElement(Wallet, {
      className: "size-10 lg:size-14",
    }),
    title: "Harga transparan dan kompetitif",
    description:
      "Kami menjamin harga yang tertera sudah mencakup semua biaya, tanpa tambahan tersembunyi, sekaligus menawarkan tarif yang bersaing di pasaran.",
  },
];

export default WhyChooseUsData;
