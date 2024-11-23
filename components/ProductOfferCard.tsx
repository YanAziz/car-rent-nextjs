import React from "react";
import Image from "next/image";

interface ProductOfferCardProps {
  name: string;
  image: string;
  discount: string;
}

const ProductOfferCard = ({ name, image, discount }: ProductOfferCardProps) => {
  return (
    <div className="relative cursor-pointer overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={1920}
        height={1080}
        className="w-full object-cover bg-zinc-300 rounded-lg hover:scale-105 transition duration-500 ease-in-out"
      />
      <div className="absolute shadow-zinc-900 shadow-md top-0 left-4 bg-red-600 text-zinc-100 px-2 py-1 md:px-4 md:py-2 rounded-b-lg">
        <span className="text-sm md:text-base lg:text-lg">{discount}</span>
      </div>
    </div>
  );
};

export default ProductOfferCard;
