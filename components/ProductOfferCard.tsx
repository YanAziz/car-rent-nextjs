import React from "react";
import Image from "next/image";

interface ProductOfferCardProps {
  name: string;
  image: string;
  discount: string;
}

const ProductOfferCard = ({ name, image, discount }: ProductOfferCardProps) => {
  return (
    <div className="relative cursor-pointer overflow-hidden group">
      <Image
        src={image}
        alt={name}
        width={1920}
        height={1080}
        className="w-full object-cover bg-slate-100 rounded-lg group-hover:scale-105 transition duration-500 ease-in-out"
      />
      <div className="absolute shadow-black shadow-md top-0 left-4 bg-red-600 text-white px-4 py-2 rounded-b-lg">
        <span className="text-lg">{discount}</span>
      </div>
    </div>
  );
};

export default ProductOfferCard;
