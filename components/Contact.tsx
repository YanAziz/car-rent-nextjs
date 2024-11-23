import { MapPin, PhoneCall, Send } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-100">
            Hubungi kami
          </h1>
          <p className="text-sm md:text-base text-zinc-400">
            Butuh informasi lebih? Kami berusaha semaksimal mungkin untuk
            membantu apa yang kamu butuhkan.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-zinc-100">
          <div className="flex gap-3">
            <MapPin className="size-6 text-zinc-100" />
            <div className="flex flex-col gap-1">
              <h2 className="text-base md:text-lg">Lokasi kantor kami</h2>
              <p className="text-sm text-zinc-400">
                Jl. Jenderal Sudirman No. 20, Jakarta Pusat
              </p>
            </div>
          </div>
          <div className="flex text-zinc-100 gap-3">
            <PhoneCall className="size-6 text-zinc-100" />
            <div className="flex flex-col gap-1">
              <h2 className="text-base md:text-lg">Butuh cepat?</h2>
              <p className="text-sm text-zinc-400">+62 812-3456-7890 (admin)</p>
              <p className="text-sm text-zinc-400">
                Semua hari, 24 jam nonstop
              </p>
            </div>
          </div>
        </div>
      </div>

      <form
        action=""
        className="flex flex-col gap-6 bg-zinc-900 p-6 rounded-lg"
      >
        <h1 className="text-base md:text-lg lg:text-xl font-bold text-zinc-100 text-center">
          Tulis kebutuhan kamu!
        </h1>
        <Input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-zinc-600 text-zinc-100 text-sm md:text-base"
        />
        <Input
          type="number"
          placeholder="Nomor telepon"
          className="w-full bg-transparent border-zinc-600 text-zinc-100 text-sm md:text-base"
        />
        <Textarea
          placeholder="Tulis mobil yang anda butuhkan"
          rows={3}
          className="w-full bg-transparent border-zinc-600 text-zinc-100 text-sm md:text-base"
        />
        <Button
          type="submit"
          className="bg-zinc-100 hover:bg-zinc-300 text-zinc-900 font-semibold w-full flex items-center justify-center"
        >
          <span className="text-sm md:text-base">Kirim</span>
          <Send className="size-5 ml-1" />
        </Button>
      </form>
    </section>
  );
};

export default Contact;
