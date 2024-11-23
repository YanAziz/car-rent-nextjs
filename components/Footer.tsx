import Link from "next/link";
import React from "react";
import { Instagram, Send, Twitch, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col mx-6 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-zinc-100 bg-zinc-800 py-12 px-8 rounded-t-md">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">EasyDrive.</h1>
            <p className="text-sm text-zinc-400">
              EasyDrive adalah layanan penyewaan mobil yang menawarkan berbagai
              macam kendaraan untuk disewa.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:ml-36">
            <h1 className="text-base md:text-lg lg:text-xl font-bold">
              Tentang
            </h1>
            <p className="text-sm text-zinc-400">
              <Link href="/car">Mobil</Link>
            </p>
            <p className="text-sm text-zinc-400">
              <Link href="/exclusive">Ekslusif</Link>
            </p>
            <p className="text-sm text-zinc-400">
              <Link href="#">Rental</Link>
            </p>
            <p className="text-sm text-zinc-400">
              <Link href="#">Blog</Link>
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:ml-36">
            <h1 className="text-base md:text-lg lg:text-xl font-bold">
              Support
            </h1>
            <p className="text-sm text-zinc-400">
              <Link href="/car">Kontak kami</Link>
            </p>
            <p className="text-sm text-zinc-400">
              <Link href="/exclusive">FAQ</Link>
            </p>
            <p className="text-sm text-zinc-400">
              <Link href="#">Syarat dan ketentuan</Link>
            </p>
            <p className="text-sm text-zinc-400">
              <Link href="#">Kebijakan</Link>
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:ml-auto">
            <h1 className="text-base md:text-lg lg:text-xl font-bold">
              Media sosial kami
            </h1>
            <div className="flex gap-4">
              <Twitter className="size-5 text-zinc-400" />
              <Instagram className="size-5 text-zinc-400" />
              <Send className="size-5 text-zinc-400" />
              <Twitch className="size-5 text-zinc-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center gap-2 md:gap-0 md:justify-between bg-zinc-900 py-4 px-8 rounded-b-2xl">
          <p className="text-xs text-zinc-100">
            © 2024 EasyDrive. All rights reserved
          </p>
          <p className="text-xs text-zinc-100">
            Powered by <Link href="#">EasyDrive</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
