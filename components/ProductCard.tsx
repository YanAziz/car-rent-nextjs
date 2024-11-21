import { Fuel, Gauge, Star, Type, User, Wallet } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  person: number;
  fuel: string;
  rating: number;
  transmition: string;
  type: string;
}

const ProductCardCar = ({
  name,
  image,
  price,
  person,
  fuel,
  rating,
  transmition,
  type,
}: ProductCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="text-zinc-100">
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1080}
          className="w-full object-cover bg-zinc-300 rounded-lg"
        />
        <div className="flex flex-col px-2 gap-3 py-2">
          <h1 className="text-sm md:text-base font-semibold">{name}</h1>
          <p className="text-xs md:text-sm flex gap-2 items-center">
            <Gauge className="size-4 text-zinc-400" />
            {transmition}
          </p>
          <p className="text-xs md:text-sm flex gap-2 items-center">
            <Fuel className="size-4 text-zinc-400" />
            {fuel}
          </p>
          <p className="text-xs md:text-sm flex gap-2 items-center">
            <Wallet className="size-4 text-zinc-400" />
            {price} / hari
          </p>
          <div className="flex gap-3">
            <p className="text-xs md:text-sm flex gap-2 items-center">
              <Type className="size-4 text-zinc-400" />
              {type}
            </p>
            <p className="text-xs md:text-sm flex gap-2 items-center">
              <User className="size-4 text-zinc-400" /> {person}
            </p>
            <p className="text-xs md:text-sm flex gap-2 items-center">
              <Star className="size-4 text-zinc-400" />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCar;
