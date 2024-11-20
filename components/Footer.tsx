import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Instagram, Send, Twitch, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col mx-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-white bg-zinc-800 py-12 px-8 rounded-t-md">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">EasyDrive.</h1>
            <p className="text-sm text-zinc-400">
              EasyDrive adalah layanan penyewaan mobil yang menawarkan berbagai
              macam kendaraan untuk disewa.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:ml-24">
            <h1 className="text-xl font-bold">Tentang</h1>
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
          <div className="flex flex-col gap-2 lg:ml-24">
            <h1 className="text-xl font-bold">Support</h1>
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
            <h1 className="text-xl font-bold">Media sosial kami</h1>
            <div className="flex">
              <Avatar>
                <AvatarFallback className="bg-zinc-800 text-zinc-400 mr-4">
                  <Twitter className="size-5" />
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-zinc-800 text-zinc-400 mr-4">
                  <Instagram className="size-5" />
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-zinc-800 text-zinc-400 mr-4">
                  <Send className="size-5" />
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-zinc-800 text-zinc-400 mr-4">
                  <Twitch className="size-5" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-zinc-900 py-4 px-8 rounded-b-2xl">
          <p className="text-xs text-white">
            © 2024 EasyDrive. All rights reserved
          </p>
          <p className="text-xs text-white">
            Powered by <Link href="#">EasyDrive</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
