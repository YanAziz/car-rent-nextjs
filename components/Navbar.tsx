"use client";

import { LogoImage, NavLinks } from "@/constants/NavData";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Menambahkan event listener scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 px-8 py-6 flex justify-between ${
        isScrolled ? "backdrop-filter backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <Image
          src={LogoImage.image}
          alt="logo"
          width={50}
          height={50}
          className="size-8"
        />
        <p className="text-xl font-bold text-white">EasyDrive</p>
      </div>

      <div className="flex gap-4 max-md:hidden">
        {NavLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-1 px-4 py-2 text-sm ${
              pathname === link.url
                ? "text-slate-100 underline underline-offset-8"
                : "text-slate-100 hover:text-slate-300"
            }`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="relative flex gap-4 items-center">
        <Menu
          className="cursor-pointer md:hidden text-white"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="absolute top-10 right-0 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg">
            {NavLinks.map((link) => (
              <Link href={link.url} key={link.label} className="flex gap-4">
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
